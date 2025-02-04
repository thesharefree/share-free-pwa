'use client';

import Header from "./header";
import Search from "../groups/search";
import PostList from "./post_list";

export default function Dashboard() {

    return (
        <section className="flex flex-col gap-4 overflow-y-auto no-scrollbar"> 
            <Header />
            <Search />
            <PostList />
        </section>
    );
}
