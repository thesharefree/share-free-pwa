'use client';

import { useMemo } from "react";
import Image from "next/image";
import DynamicHeroIconOutline from '@/components/icon_outline';
import { useRouter } from "next/navigation";
import Badge from "@/components/badge";


export default function Group({ group }: { group: any }) {
    const router = useRouter();

    const goToGroupProfile = () => {
        router.push(`/home/groups/${group._id}`);
    }

    const location = useMemo(() => {
        return `${group.city}, ${group.province}, ${group.country}`
    }, [group]);

    return (
        <div className="flex flex-row w-full mx-auto rounded-md border-[1px] border-gray-500 p-2 gap-2" onClick={() => goToGroupProfile()}>
            {group.banner && <Image className="rounded-md w-[30%]" width={10} height={10} color="white" src={group.banner} alt={''} />}
            <div className="flex flex-col gap-1 w-[70%]">
                <p className="text-xl">{group.name}</p>
                {group.city && <div className="flex flex-row gap-1 text-gray-600">
                    <DynamicHeroIconOutline icon={'LocationMarkerIcon'} className="w-4 h-4" />
                    <p className="text-xs color-blue">{location}</p>
                </div>}
                <div className="flex flex-row gap-1 break-all">
                    {group.topics.map((topic: any) => (
                        <Badge key={topic._id} className={''} type={'inactive'}>
                            {topic.name}
                        </Badge>
                    ))}
                </div>
                <div className="flex flex-row gap-1 text-gray-600 items-center">
                    <DynamicHeroIconOutline icon={'GlobeAltIcon'} className="w-4 h-4" />
                    <p className="text-xs color-blue">{group.languages?.join(" ")}</p>
                </div>
            </div>
        </div>
    );
}
