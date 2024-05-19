'use client';

import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/firebase/auth';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.email) {
            router.replace('/login');
        }
    }, [user]);

    const logout = (e) => {
        e.stopPropagation();
        signOut();
    }

    return (
        <section className="">
            hi {user?.displayName}
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </section>
    );
}
