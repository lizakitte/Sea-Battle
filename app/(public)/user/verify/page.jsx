"use client";

import "../../../styles/formStyle.css";

import { app } from "@/app/_lib/firebase";
import { useAuth } from "@/app/_lib/AuthContext";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";

export default function VerifyEmail() {
    const { user } = useAuth();

    signOut(getAuth(app));

    return ( 
    <>
        <h1>Email not verified. Verify clicking on link in email send to your address {user?.email}</h1>
    </> );
}