'use client';

import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/useAuth';
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import { ChatAltIcon } from "@heroicons/react/outline";
import Button from "@/components/button";
import Badge from "@/components/badge";


export default function Header() {
    const router = useRouter();
    const [{ auth, user }, dispatch] = useReduxHooks((state: RootState) => state);
    const { loggedInUser } = auth;
    const { topics } = user;

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <span className={`font-semibold text-black dark:text-white`}>
                        Hey {loggedInUser?.name?.split(' ')[0]},
                    </span>
                    <span className="text-[0.6rem]">
                        Good to see you here!
                    </span>
                </div>
                <span className={`font-semibold text-black dark:text-white text-right`}>
                    <Button>
                        <ChatAltIcon className="w-7 h-7 text-gray-600 dark:text-white" />
                    </Button>
                </span>
            </div>
            <div className="mt-2 flex gap-1 overflow-x-auto">
                {topics?.map((topic: any) => (
                    <Badge key={topic._id} className={''} type={'primary'}>
                        {topic.name}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
