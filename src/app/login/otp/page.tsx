'use client';

import Image from "next/image";
import { Cambo } from 'next/font/google';
import OtpInput from 'react-otp-input';
import { signInWithFacebook, signInWithGoogle, signInWithTwitter } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/input";
import Button from "@/components/button";

const cambo = Cambo({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    useAuth();
    const [otp, setOtp] = useState();

    const loginWithOtp = (e) => {
        e.stopPropagation();
        // send otp
    }

    return (
        <div className="p-4 space-y-4 md:px-8">
            <div className="w-full flex flex-row items-center justify-center space-x-8 pt-4">
                <span className="">Enter OTP</span>
            </div>
            <div className="mx-auto w-full">
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className="flex flex-col gap-2 pt-4">
                <Button onClick={loginWithOtp}>Login with OTP</Button>
                <p className="text-xs text-center">Enter the OTP received on your phone number</p>
            </div>
        </div>
    );
}
