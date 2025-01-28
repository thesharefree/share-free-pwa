'use client';

import { useAuth } from "@/hooks/useAuth";
import useReduxHooks from "@/hooks/useReduxHooks";
import { fetchTopPosts } from "@/redux/actions/postActions";
import { fetchUserTopics, fetchUserPosts } from "@/redux/actions/userActions";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);

    useAuth();

    useEffect(() => {
        if (!loggedInUser?._id) {
            router.replace('/login');
        } else {
            router.replace('/home');
        }
    }, [loggedInUser, router]);

    return (<></>);
}
