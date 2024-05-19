import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from '@/lib/firebase/auth';
import { useState, useEffect } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((authUser) => {
            setUser(authUser);
        })
        return () => unsubscribe();
    }, []);

    return { user };
}