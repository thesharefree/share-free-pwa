'use client';

import OtpInput from 'react-otp-input';
import { sendOTP, verifyOtp } from '@/lib/firebase/auth';
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/button";
import useReduxHooks from '@/hooks/useReduxHooks';
import type { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase/firebase';
import { RecaptchaVerifier } from 'firebase/auth';

export default function Home() {
    const router = useRouter();
    const [{ loggedInUser, isNewUser, phoneNumber, verificationId }, dispatch] = useReduxHooks((state: RootState) => state.auth);
    const [otp, setOtp] = useState('');
    const [resendWithin, setResendWithin] = useState(30);

    useAuth();

    setTimeout(() => {
        if (resendWithin > 0) {
            setResendWithin(resendWithin - 1);
        }
    }, 1000);

    useEffect(() => {
        if (!phoneNumber) {
            router.back();
        }
    }, [phoneNumber, router]);

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

    const resendOtp = async (e) => {
        e.stopPropagation();
        setResendWithin(60);
        let recaptchaVerifier = new RecaptchaVerifier(auth, 'resend_otp', {
            'size': 'invisible',
        });
        const response = await sendOTP(`+91${phoneNumber}`, recaptchaVerifier);
        if (response?.verificationId) {
            dispatch({ type: 'SET_OTP_VERIFICATION_ID', payload: { phoneNumber, verificationId: response.verificationId } });
            router.push('/login/otp');
        }
    }

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
            <div className="flex flex-col gap-2 pt-4">
                <Button id="resend_otp" className="btn-anchor" disabled={resendWithin > 0} onClick={resendOtp}>{`Resend${resendWithin > 0 ? ` in ${resendWithin} sec` : ''}`}</Button>
            </div>
            <div className="flex flex-col gap-2 pt-16">
                <Button className="btn-primary" onClick={loginWithOtp} disabled={!isOTPValid}>Login with OTP</Button>
                <p className="text-xs text-center">Click here to login after entering the OTP</p>
            </div>
        </div>
    );
}
