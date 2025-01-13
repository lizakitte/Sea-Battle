"use client";

import "../../../styles/formStyle.css";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { useAuth } from "@/app/_lib/AuthContext";
import { useState } from "react";

import { redirect } from "next/navigation";

function Register() {
  const { user } = useAuth();

  const [registerError, setRegisterError] = useState(""); //stan błędów rejestracji

  if (user) {
    return <p>You are already logged in!</p>;
  }

  const auth = getAuth();

  const onSubmit = (event) => {
    event.preventDefault();

    // walidacja obu równości haseł
    createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
      .then((userCredential) => {
        console.log("User registered!");
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification send!");
          redirect("/user/verify");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.dir(error);
      });
  };

  return (
    <div className="form-div">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
        />

        <input type="submit" value="Register" />
      </form>

      {registerError ?
                <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{registerError}</span>
                </div>
              : <></>}
    </div>
  );
}

export default Register;
