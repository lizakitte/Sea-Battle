import "../../../styles/formStyle.css";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { useAuth } from "@/app/lib/firebase/AuthContext";
import { useState } from "react";

function ProfileForm() {

    const onSubmit = (data) => {
        updateProfile(user, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {
            setError(error.message);
          });
      };

    return ( 
        <Suspense>
        <div className="form-div">
            <h2>Your profile</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" placeholder="Your name.."/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" disabled="true" placeholder="Your email.."/>

                <label htmlFor="photo">Photo</label>
                <input type="photo" id="photo" name="photo" placeholder="Insert photo.."/>

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
                  <span>{error.message}</span>
                </div>
              : <></>}
            
                <input type="submit" value="Update"/>
            </form>
        </div>
        </Suspense>
     );
}

export default ProfileForm;