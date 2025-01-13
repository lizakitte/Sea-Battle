"use client";

import "../../../styles/formStyle.css";

import { updateProfile } from "firebase/auth";
import { useAuth } from "@/app/_lib/AuthContext";
import { useState, Suspense } from "react";

function ProfileForm() {
  const { user } = useAuth();

  const [error, setError] = useState(null);

    const onSubmit = (event) => {
      event.preventDefault();

        updateProfile(user, {
          displayName: event.currentTarget.name.value,
          photoURL: event.currentTarget.photo.value,
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
          <div style={{display: "flex", flex: "row nowrap", justifyContent: "space-evenly"}}>
        <div style={{width: "50%"}}>
            <h2>Your profile</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={user?.displayName} placeholder="Your name.."/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" disabled defaultValue={user?.email}/>

                <label htmlFor="photo">Photo</label>
                <input type="url" id="photo" name="photo" defaultValue={user?.photoURL} placeholder="Insert photo.."/>

                <label htmlFor="street">Street</label>
                <input type="address" id="street" name="street" placeholder="Your street.."/>

                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="Your city.."/>

                <label htmlFor="zip-code">Zip code</label>
                <input type="url" id="zip-code" name="zip-code" placeholder="Your 🎀🦛.."/>

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
        {user?.photoURL
          ? <img src={user?.photoURL} style={{display: "inline-block", border: "5px solid #333", borderRadius: "100%", width: "300px", height: "300px"}}></img>
          : <></>}
          </div>
        </Suspense>
     );
}

export default ProfileForm;