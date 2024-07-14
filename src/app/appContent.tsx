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
        <div className="md:rounded-lg md:shadow md:shadow-gray-300 content overflow-y-auto">
          {children}
        </div>
      </div>
    </Provider>
  );
}
