"use client";

import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getAuth } from 'firebase/auth'
import { useSearchParams, useRouter } from "next/navigation";
import "../../../styles/formStyle.css";
import { Suspense, useState } from "react";
import { app } from "@/app/_lib/firebase";

function Login() {
    const auth = getAuth(app);
    const params = useSearchParams();
    const router = useRouter();
    const returnUrl = params.get("returnUrl");
    const [error, setError] = useState(false);
    
    const onSubmit = (e) => {
      e.preventDefault();
      const email = e.target["name"].value;
      const password = e.target["password"].value;
      setPersistence(auth, browserSessionPersistence)
      .then( () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           router.push(returnUrl ?? "/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError({errorCode, errorMessage});
        });
      })
      .catch(error => {
        console.log(error);
      });
    };

    return (
      <Suspense>
        <div className="form-div">
            <h2>Log into your account</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email.."/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password.."/>
            
                {error ?
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
                  <span>{error.errorMessage}</span>
                </div>
              : <></>}
              
                <input type="submit" value="Log in"/>
            </form>
        </div>
        </Suspense>
     );
}

export default Login;