"use client";

import { useRouter } from "next/navigation";
import "../../../styles/formStyle.css";
import { Suspense } from "react";

function Logout() {
    
    const router = useRouter();
    
    const onSubmit = () => {
        signOut(auth);
        router.push("/");
    };

    return (
      <Suspense>
        <div className="form-div">
            <h2>Are you sure you want to exit</h2>
            <form onSubmit={onSubmit}>              
                <input type="danger" value="Log out"/>
            </form>
        </div>
        </Suspense>
     );
}

export default Login;