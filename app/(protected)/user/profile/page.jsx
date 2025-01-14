"use client";

import "../../../styles/formStyle.css";

import { updateProfile } from "firebase/auth";
import { useAuth } from "@/app/_lib/AuthContext";
import { useState, useEffect, Suspense } from "react";
import { db } from '@/app/_lib/firebase'
import { collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore'

function ProfileForm() {
  const { user } = useAuth();

  const [error, setError] = useState(null);

  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await setDoc(doc(db, "users", user?.uid), {
        address: {
          city: event.target.city.value,
          street: event.target.street.value,
          zipCode: event.target["zip-code"].value,
        },
      });
      console.log("Document written with ID: ", docRef?.uid);
    } catch (e) {
      setError(e.message);
    }

    updateProfile(user, {
      displayName: event.target.name.value,
      photoURL: event.target.photo.value,
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    getDoc(doc(db, "users", user?.uid)).then((snapshot) => {
      const { street, city, zipCode } = snapshot.data().address;
      setCity(city);
      setStreet(street);
      setZipCode(zipCode);
    });
  }, []);


  return (
    <Suspense>
      <div
        style={{
          display: "flex",
          flex: "row nowrap",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2>Your profile</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your name.."
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              disabled
              defaultValue={user?.email}
            />

            <label htmlFor="photo">Photo</label>
            <input
              type="url"
              id="photo"
              name="photo"
              defaultValue={user?.photoURL}
              placeholder="Insert photo.."
            />

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              defaultValue={street}
              placeholder="Your street.."
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={city}
              placeholder="Your city.."
            />

            <label htmlFor="zip-code">Zip code</label>
            <input
              type="text"
              id="zip-code"
              name="zip-code"
              defaultValue={zipCode}
              placeholder="Your zip code.."
            />

            {error ? (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error.message}</span>
              </div>
            ) : (
              <></>
            )}

            <input type="submit" value="Update" />
          </form>
        </div>
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            style={{
              display: "inline-block",
              border: "5px solid #333",
              borderRadius: "100%",
              width: "300px",
              height: "300px",
            }}
          ></img>
        ) : (
          <></>
        )}
      </div>
    </Suspense>
  );
}

export default ProfileForm;
