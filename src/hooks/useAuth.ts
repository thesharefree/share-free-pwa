import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from '@/lib/firebase/auth';
import { useState, useEffect } from "react";
import { fetchLoggedInUser, logout } from '@/redux/actions/authActions';
import type { RootState } from '@/redux/store';
import useReduxHooks from './useReduxHooks';

export const useAuth = () => {
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);
    const [firebaseUser, setFirebaseUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((authUser) => {
            console.log('firebase user changed');
            setFirebaseUser(authUser);
            authUser?.getIdToken().then(token => localStorage.setItem('ACCESS_TOKEN', token || ''));
        })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (firebaseUser && firebaseUser.uid !== loggedInUser?.firebaseUserId) {
            console.log('fetching SF user');
            dispatch(fetchLoggedInUser());
        } else if (!firebaseUser) {
            console.log('logging out');
            dispatch(logout());
        }
    }, [dispatch, firebaseUser, loggedInUser]);

    return { firebaseUser };
}