"use client"
import { useRouter } from "next/navigation";
import Footer from "./footer";
import { useAuth } from "@/hooks/useAuth";
import useReduxHooks from "@/hooks/useReduxHooks";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [{ loggedInUser }, dispatch] = useReduxHooks((state: RootState) => state.auth);

  useAuth();

  useEffect(() => {
    if (!loggedInUser?._id) {
      router.replace('/login');
    }
  }, [loggedInUser, router]);
  return (
    <div>
      <div className="pb-14">
        {children}
      </div>
      <Footer />
    </div>
  );
}
