import Link from "next/link";

export default function Home() {
    return (
        <section className="">
            <Link href={'/login'}>Login</Link>
        </section>
    );
}
