'use client';

import useReduxHooks from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import Post from "./post";


export default function PostList() {
    const [{ user }] = useReduxHooks((state: RootState) => state);
    const { posts } = user;

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col gap-4">
                {posts?.map((post: any) => <Post key={post._id} post={post} />)}
            </div>
        </div>
    );
}
