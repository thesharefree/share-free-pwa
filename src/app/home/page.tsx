'use client';

import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/firebase/auth';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.uid) {
            router.replace('/login');
        }
    }, [user]);

    const logout = (e) => {
        e.stopPropagation();
        signOut();
    }

    return (
        <section className="">
            <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
                <div className="flex flex-col w-full pb-8 ">
                    <span className={`text-center items-center text-2xl font-semibold text-gray-900 dark:text-white tracking-widest`}>
                        hi {user?.displayName}
                    </span>
                    <span className="text-xs font-mono uppercase text-center">
                        welcome to your virtual support group
                    </span>
                    <div className='text-center'>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
