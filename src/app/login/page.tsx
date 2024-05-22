'use client';

import Image from "next/image";
import { Cambo } from 'next/font/google';
import { signInWithFacebook, signInWithGoogle, signInWithTwitter } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const cambo = Cambo({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (user?.uid) {
            router.replace('/home')
        }
    }, [user]);

    const loginWithGoogle = (e) => {
        e.stopPropagation();
        signInWithGoogle();
    }

    const loginWithFacebook = (e) => {
        e.stopPropagation();
        signInWithFacebook();
    }

    const loginWithTwitter = (e) => {
        e.stopPropagation();
        signInWithTwitter();
    }

    return (
        <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
            <div className="flex flex-col w-full pb-8 ">
                <Image className="mx-auto mb-2" width={80} height={80} src={'/icons/icon-512x512.png'} alt="as" />
                <span className={`${cambo.className} text-center items-center text-2xl font-semibold text-gray-900 dark:text-white tracking-widest`}>
                    share free
                </span>
                <span className="text-xs font-mono uppercase text-center">
                    your virtual support group
                </span>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-8">
                <span className="">Sign in / Sign up</span>
            </div>
            <div className="max-w-xs mx-auto">
                <div className="relative">
                    <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
                        <Image src={'/icons/tel.svg'} height={16} width={16} alt="tel" style={{ filter: 'invert(50%)' }} />
                    </span>
                    <span className="absolute start-6 bottom-2 text-gray-500 dark:text-gray-400">
                        <span>+91-</span>
                    </span>
                    <input type="tel" id="floating-phone-number" className="block py-2 ps-16 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                    <label htmlFor="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button className="flex w-full items-center justify-center bg-redAccent h-12 rounded-lg">
                    Send OTP
                </button>
                <p className="text-xs text-center">We will send an OTP to your phone number</p>
            </div>
            <div className="flex flex-row w-full items-center justify-center space-x-4 pt-8">
                <hr className="w-48 h-[1px] mx-auto my-4 bg-black border-0 rounded dark:bg-white"></hr>
                <span>OR</span>
                <hr className="w-48 h-[1px] mx-auto my-4 bg-black border-0 rounded dark:bg-white"></hr>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-8" onClick={loginWithFacebook}>
                <button className="w-16 h-16 rounded-full border bg-[#4267B2] text-2xl">
                    <Image style={{ filter: 'invert(100%)' }} className="mx-auto text-white" width={32} height={32} color="white" src={'/icons/facebook.svg'} alt={'f'} />
                </button>
                <button className="w-16 h-16 rounded-full border bg-white text-2xl" onClick={loginWithGoogle}>
                    <Image className="mx-auto" width={32} height={32} color="white" src={'/icons/google.svg'} alt={'G'} />
                </button>
                <button className="w-16 h-16 rounded-full border bg-[#1DA1F2] text-2xl" onClick={loginWithTwitter}>
                    <Image style={{ filter: 'invert(100%)' }} className="mx-auto" width={32} height={32} color="white" src={'/icons/twitter.svg'} alt={'t'} />
                </button>
            </div>
        </div>
    );
}
