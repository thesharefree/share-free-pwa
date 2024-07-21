'use client';

import { useState } from "react";
import SearchInput from "@/components/search_input";
import useReduxHooks from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import { searchGroupsByKeywords } from "@/redux/actions/groupActions";
import { usePathname, useRouter } from "next/navigation";


export default function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);
    const [search, setSearch] = useState('');

    const isDashboard = pathname.includes('dashboard');

    const onSearch = () => {
        dispatch({ type: 'SET_SEARCH_FILTER', payload: search });
        dispatch(searchGroupsByKeywords([search]));
    }

    const onClick = () => {
        if (isDashboard) {
            router.push('/home/groups');
        }
    }

    return (
        <div className="w-full mx-auto">
            <SearchInput {...{
                left: {
                    icon: 'SearchIcon',
                },
                right: {
                    icon: 'ChevronDoubleRightIcon',
                    onClick: onSearch,
                },
                value: search,
                onChange: setSearch,
                placeholder: 'Search Groups',
                autoFocus: !isDashboard,
                onclick: isDashboard ? onClick : undefined,
            }} />
        </div>
    );
}
