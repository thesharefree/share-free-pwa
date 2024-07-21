'use client';

import useReduxHooks from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import Group from "./group";


export default function GroupList() {
    const [{ group }] = useReduxHooks((state: RootState) => state);
    const { groups } = group;

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col gap-4">
                {groups?.map((g: any) => <Group key={g._id} group={g} />)}
            </div>
        </div>
    );
}
