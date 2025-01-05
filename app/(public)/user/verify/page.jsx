import "../../../styles/formStyle.css";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";

export default function VerifyEmail() {
    const { user } = useAuth();
    // singOut(getAuth());
    // Samodzielnie dodaj także wywołanie funkcji singOut. Wylogowanie powinno nastąpić automatycznie, gdy zostanie wyświetlona strona, ale powinieneś zapamiętać adres zarejestrowanego użytkownika, aby działał kod powyżej.

    return ( 
    <>
        <h1>Email not verified. Verify clicking on link in email send to your address {user?.email}</h1>
    </> );
}