import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
  onAuthStateChanged as _onAuthStateChanged,
  User,
  NextOrObserver,
  ApplicationVerifier,
} from "firebase/auth";

import { auth } from "@/lib/firebase/firebase";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signInWithFacebook() {
  const provider = new FacebookAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Facebook", error);
  }
}

export async function signInWithTwitter() {
  const provider = new TwitterAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Twitter", error);
  }
}

export async function sendOTP(phoneNumber: string, appVerifier: ApplicationVerifier) {
  try {
    return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  } catch (error) {
    console.error("Error sending OTP", error);
  }
};

export async function verifyOtp(verificationId: string, otp: string) {
  try {
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    await signInWithCredential(auth, credential);
  } catch (error) {
    console.error("Error verifying OTP", error);
  }
};

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out", error);
  }
}