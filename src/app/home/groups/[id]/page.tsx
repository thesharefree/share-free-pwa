'use client';

import { useEffect } from 'react';
import Image from "next/image";
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import { useParams } from "next/navigation";
import { fetchGroup } from '@/redux/actions/groupActions';


export default function Group() {
    const params = useParams();
    const [{ selectedGroup }, dispatch] = useReduxHooks((state: RootState) => state.group);

    useEffect(() => {
        dispatch(fetchGroup(params.id));
    }, []);

    return selectedGroup && (
        <section className="flex flex-col gap-4">
            {selectedGroup.banner && <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '50%' }}
                src={selectedGroup.banner} alt={''} />}
            <h2>{selectedGroup.name}</h2>
        </section>
    );
}
