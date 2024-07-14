'use client';

import useReduxHooks from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import Post from "./post";


export default function PostList() {
    const [{ post }] = useReduxHooks((state: RootState) => state);
    const { posts } = post;

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col gap-4">
                {posts?.map((p: any) => <Post key={post._id} post={p} />)}
            </div>
        </div>
    );
}
