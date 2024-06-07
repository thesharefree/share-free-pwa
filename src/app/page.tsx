import Link from "next/link";

export default function Home() {
    return (
        <section className="">
            <div className="content justify-center">
                <Link replace href={'/login'}>Login</Link>
            </div>
        </section>
    );
}
