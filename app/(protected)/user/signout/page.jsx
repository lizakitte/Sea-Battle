"use client";

import { useRouter } from "next/navigation";
import "../../../styles/formStyle.css";
import { Suspense } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/app/_lib/firebase";

export default function Logout() {
    
    const router = useRouter();
    
    const onSubmit = (e) => {
        const auth = getAuth(app);
        e.preventDefault();
        signOut(auth);
        router.push("/user/signin");
    };

    return (
      <Suspense>
        <div className="form-div">
            <h2>Are you sure you want to exit</h2>
            <form onSubmit={onSubmit}>              
                <input type="submit" className="danger" value="Log out"/>
            </form>
        </div>
        </Suspense>
     );
}