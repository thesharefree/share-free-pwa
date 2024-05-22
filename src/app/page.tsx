import Link from "next/link";

export default function Home() {
    return (
        <section className="">
            <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
                <Link href={'/login'}>Login</Link>
            </div>
        </section>
    );
}
