'use client';

import { useState } from "react";
import SearchInput from "@/components/search_input";


export default function Search() {
    const [search, setSearch] = useState('');

    return (
        <div className="w-full mx-auto pt-8">
            <SearchInput {...{
                left: {
                    icon: 'SearchIcon',
                },
                value: search,
                onChange: setSearch,
                placeholder: 'Search Groups',
            }} />
        </div>
    );
}
