'use client'
import { useAuth } from "@/app/_lib/AuthContext";
import { Suspense, useLayoutEffect } from "react";
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Protected({children}) {
    const { user, loading } = useAuth();
    const returnUrl = usePathname();

    useLayoutEffect(() => {
        if (!loading && !user) {
            redirect(`/user/signin?returnUrl=${returnUrl}`);
        }
    }, []);
    return ( 
    <>
    <Suspense>
        { children }
    </Suspense>
    </> 
    );
}

export default Protected;