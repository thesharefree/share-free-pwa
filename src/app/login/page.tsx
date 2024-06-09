'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Cambo } from 'next/font/google';
import { signInWithFacebook, signInWithGoogle, signInWithTwitter, sendOTP } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useMemo, useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import useReduxHooks from "@/hooks/useReduxHooks";
import type { RootState } from '@/redux/store';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

const cambo = Cambo({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    const router = useRouter();
    const [{ loggedInUser, isNewUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);
    const [phoneNumber, setPhoneNumber] = useState('');

    useAuth();

    useEffect(() => {
        if (loggedInUser?._id) {
            router.replace('/home');
        } else if (isNewUser) {
            router.push('/register');
        }
    }, [loggedInUser, isNewUser, router]);

    const isPhoneNumberValid = useMemo(() => {
        return /^\d{10}$/.test(phoneNumber)
    }, [phoneNumber]);

    const sendOtp = async (e) => {
        e.stopPropagation();
        let recaptchaVerifier = new RecaptchaVerifier(auth, 'send_otp', {
            'size': 'invisible',
        });
        const response = await sendOTP(`+91${phoneNumber}`, recaptchaVerifier);
        if (response?.verificationId) {
            dispatch({ type: 'SET_OTP_VERIFICATION_ID', payload: { phoneNumber, verificationId: response.verificationId } });
            router.push('/login/otp');
        }
    }

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
        <div className="space-y-4 md:px-8 content items-center justify-center">
            <div className="flex flex-col w-full py-8">
                <Image className="mx-auto mb-2" width={80} height={80} src={'/icons/icon-512x512.png'} alt="as" />
                <span className={`${cambo.className} text-center items-center text-2xl font-semibold text-gray-900 dark:text-white tracking-widest`}>
                    share free
                </span>
                <span className="text-xs font-mono uppercase text-center">
                    your virtual support group
                </span>
            </div>
            <div>
                <span>Sign in / Sign up</span>
            </div>
            <div className=" w-full mx-auto pt-8">
                <Input {...{
                    left: {
                        icon: 'PhoneIcon',
                        text: '+91-'
                    },
                    value: phoneNumber,
                    onChange: setPhoneNumber,
                    placeholder: 'Phone Number',
                    type: 'tel',
                    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
                }}></Input>
            </div>
            <div className="flex flex-col  w-full gap-2 pt-4">
                <Button className="btn-primary" id="send_otp" onClick={sendOtp} disabled={!isPhoneNumberValid}>Send OTP</Button>
                <p className="text-xs text-center">We will send an OTP to your phone number</p>
            </div>
            <div className="flex flex-row w-full items-center justify-center space-x-4 pt-8">
                <hr className="w-48 h-[1px] mx-auto my-4 bg-black border-0 rounded dark:bg-white"></hr>
                <span>OR</span>
                <hr className="w-48 h-[1px] mx-auto my-4 bg-black border-0 rounded dark:bg-white"></hr>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-10">
                <Button className="w-16 h-16 rounded-full border bg-[#4267B2] text-2xl" onClick={loginWithFacebook}>
                    <Image style={{ filter: 'invert(100%)' }} className="mx-auto text-white" width={32} height={32} color="white" src={'/icons/facebook.svg'} alt={'f'} />
                </Button>
                <Button className="w-16 h-16 rounded-full border bg-white text-2xl" onClick={loginWithGoogle}>
                    <Image className="mx-auto" width={32} height={32} color="white" src={'/icons/google.svg'} alt={'G'} />
                </Button>
                <Button className="w-16 h-16 rounded-full border bg-[#1DA1F2] text-2xl" onClick={loginWithTwitter}>
                    <Image style={{ filter: 'invert(100%)' }} className="mx-auto" width={32} height={32} color="white" src={'/icons/twitter.svg'} alt={'t'} />
                </Button>
            </div>
        </div>
    );
}
