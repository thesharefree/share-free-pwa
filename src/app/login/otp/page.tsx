'use client';

import OtpInput from 'react-otp-input';
import { verifyOtp } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/button";
import useReduxHooks from '@/hooks/useReduxHooks';
import type { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [{ loggedInUser, isNewUser, phoneNumber, verificationId }, dispatch] = useReduxHooks((state: RootState) => state.auth);
    const [otp, setOtp] = useState('');

    useAuth();

    useEffect(() => {
        if (loggedInUser?._id) {
            router.replace('/home');
        } else if (isNewUser) {
            router.push('/register');
        }
    }, [loggedInUser, isNewUser, router]);

    const isOTPValid = useMemo(() => {
        return /^\d{6}$/.test(otp)
    }, [otp]);

    const loginWithOtp = (e) => {
        e.stopPropagation();
        verifyOtp(verificationId, otp);
    }

    return (
        <div className="md:px-8 content justify-center">
            <div className="flex flex-col">
                <span className="text-sm">OTP sent to</span>
                <span className="text-2xl">{`+91-${phoneNumber}`}</span>
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
                    numInputs={6}
                    renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className="flex flex-col gap-2 pt-16">
                <Button onClick={loginWithOtp} disabled={!isOTPValid}>Login with OTP</Button>
                <p className="text-xs text-center">Click here to login after entering the OTP</p>
            </div>
        </div>
    );
}
