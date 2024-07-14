'use client';

import { useMemo } from "react";
import moment from 'moment';
import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import DynamicHeroIconSolid from '@/components/icon_solid';
import DynamicHeroIconOutline from '@/components/icon_outline';
import { useRouter } from "next/navigation";
import Badge from "@/components/badge";
import Button from "@/components/button";
import { likePost, supportPost } from "@/lib/api/postService";
import useReduxHooks from "@/hooks/useReduxHooks";
import { fetchUserPosts } from "@/redux/actions/userActions";
import { RootState } from "@/redux/store";


export default function Post({ post }: { post: any }) {
    const router = useRouter();
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);

    const goToUserProfile = (id: string) => {
        router.push(`/home/user/${id}`);
    }

    const location = useMemo(() => {
        return `${post.city}, ${post.province}, ${post.country}`
    }, [post]);

    const onLikePost = async (postId: string) => {
        await likePost(postId);
        dispatch(fetchUserPosts());
    }

    const onSupportPost = async (postId: string) => {
        await supportPost(postId);
        dispatch(fetchUserPosts());
    }

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col gap-2">
                <hr />
                <div className="flex flex-row text-center items-center gap-1" onClick={() => goToUserProfile(post.postedBy._id)}>
                    <Image className="rounded-full w-5 h-5" width={10} height={10} color="white" src={post.postedBy.photoUrl} alt={'G'} />
                    <p>{post.postedBy.name}</p>
                </div>
                <div className="flex flex-row gap-1 text-gray-600">
                    <LocationMarkerIcon className="w-4 h-4" />
                    <p className="text-xs color-blue">{location}</p>
                </div>
                <div className="flex flex-row gap-1">
                    {post.topics.map((topic: any) => (
                        <Badge key={topic._id} className={''} type={'inactive'}>
                            {topic.name}
                        </Badge>
                    ))}
                </div>
                <div>{post.content}</div>
                <div className="flex flex-row justify-end text-center items-center text-xs gap-1">
                    <DynamicHeroIconSolid icon={'ThumbUpIcon'} className="w-4 h-4 text-blue-500" />
                    <span>{post.likes ?? 0}</span>
                    <DynamicHeroIconSolid icon={'HeartIcon'} className="w-4 h-4 text-red-500" />
                    <span>{post.supports ?? 0}</span>
                </div>
                <div className="flex flex-row justify-between text-center items-center">
                    <div className="flex flex-row gap-1">
                        <Button className="w-8 h-8" onClick={() => onLikePost(post._id)}>
                            {post.myActions[0].liked
                                ? <DynamicHeroIconSolid icon={'ThumbUpIcon'} className="w-8 h-8 text-blue-500" />
                                : <DynamicHeroIconOutline icon={'ThumbUpIcon'} className="w-8 h-8 text-blue-500" />}
                        </Button>
                        <Button className="w-8 h-8" onClick={() => onSupportPost(post._id)}>
                            {post.myActions[0].supported
                                ? <DynamicHeroIconSolid icon={'HeartIcon'} className="w-8 h-8 text-red-500" />
                                : <DynamicHeroIconOutline icon={'HeartIcon'} className="w-8 h-8 text-red-500" />}
                        </Button>
                    </div>
                    <div className="text-xs text-gray-600">
                        {`${moment(post.createdDate).format('DD MMM, YYYY hh:mm a')}`}
                    </div>
                </div>
            </div>
        </div>
    );
}
