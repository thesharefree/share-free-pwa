'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/firebase/auth';
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import { fetchUserPosts, fetchUserTopics } from "@/redux/actions/userActions";
import { fetchTopPosts } from "@/redux/actions/postActions";


export default function Home() {
    const router = useRouter();
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);

    useAuth();

    useEffect(() => {
        if (!loggedInUser?._id) {
            router.replace('/login');
        } else {
            dispatch(fetchUserTopics());
            dispatch(fetchUserPosts());
            dispatch(fetchTopPosts());
            router.replace('/home/dashboard');
        }
    }, [loggedInUser, router]);

    const logout = (e) => {
        e.stopPropagation();
        signOut();
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <section className="content justify-center">
            <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
                <div className="flex flex-col w-full pb-8 ">
                    <span className={`text-center items-center text-2xl font-semibold text-black dark:text-white tracking-widest`}>
                        hi {loggedInUser?.name}
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
