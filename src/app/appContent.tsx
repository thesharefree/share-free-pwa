'use client';

import "./globals.css";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function AppContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const canGoBack = window?.history?.length && window?.history.length > 1;
  const canGoBack = true;

  return (
    <Provider store={store}>
      <div className="flex flex-col md:max-w-md mx-auto h-screen">
        <div className="md:rounded-lg md:shadow md:shadow-gray-300 content">
          {canGoBack &&
            <Button onClick={router.back} className="absolute t-5 l-5 z-50 bg-white dark:bg-black w-10 h-10">
              <ChevronLeftIcon className="w-10 h-10 text-black dark:text-white" />
            </Button>
          }
          {children}
        </div>
      </div>
    </Provider>
  );
}
