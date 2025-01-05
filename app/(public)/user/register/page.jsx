import "../../../styles/formStyle.css";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { useAuth } from "@/app/lib/firebase/AuthContext";
import { useState } from "react";


function Register() {
  const { user } = useAuth();

  if (user) {
    return null;
  }

  const auth = getAuth();

  const [registerError, setRegisterError] = useState(""); //stan błędów rejestracji

  const onSubmit = (data) => {
    // walidacja obu równości haseł
    createUserWithEmailAndPassword(auth, data.email, data.password)
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
      <form action="/action_page.php">
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
                  <span>{registerError.message}</span>
                </div>
              : <></>}
    </div>
  );
}

export default Register;
