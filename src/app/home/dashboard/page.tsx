'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/firebase/auth';
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import Header from "./header";
import Search from "./search";


export default function Dashboard() {
    const router = useRouter();
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);

    useAuth();

    useEffect(() => {
        if (!loggedInUser?._id) {
            router.replace('/login');
        }
    }, [loggedInUser, router]);

    return (
        <section className="flex flex-col gap-2">
            <Header />
            <Search />
        </section>
    );
}
