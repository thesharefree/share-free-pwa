'use client';

import OtpInput from 'react-otp-input';
import { signInWithFacebook, signInWithGoogle, signInWithTwitter } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Button from "@/components/button";

export default function Home() {
    useAuth();
    const [otp, setOtp] = useState('');

    const loginWithOtp = (e) => {
        e.stopPropagation();
        // send otp
    }

    return (
        <div className="md:px-8 content justify-center">
            <div className="flex flex-col">
                <span className="text-sm">OTP sent to</span>
                <span className="text-2xl">+91-9970197591</span>
                <p className="text-xs pt-2">We have sent you an OTP on your phone number.
                Please enter the OTP if received or hit resend to request OTP again.</p>
            </div>
            <div className="flex flex-col mx-auto w-full pt-16 gap-2">
                <OtpInput
                    inputStyle={{
                        display: "flex",
                        width: '20%',
                        height: '4rem',
                        borderRadius: '0.3rem',
                        color: 'black',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        borderWidth: '1px',
                    }}
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className="flex flex-col gap-2 pt-16">
                <Button onClick={loginWithOtp}>Login with OTP</Button>
                <p className="text-xs text-center">Click here to login after entering the OTP</p>
            </div>
        </div>
    );
}
