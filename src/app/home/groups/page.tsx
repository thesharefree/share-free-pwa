'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import Search from "./search";
import GroupList from "./group_list";


export default function Dashboard() {
    const router = useRouter();
    const [{ loggedInUser }] = useReduxHooks((state: RootState) => state.auth);

    useAuth();

    useEffect(() => {
        if (!loggedInUser?._id) {
            router.replace('/login');
        }
    }, [loggedInUser, router]);

    return (
        <section className="flex flex-col gap-4">
            <Search />
            <GroupList />
        </section>
    );
}
