// components/Footer.js
import Link from 'next/link';
import { HomeIcon, SearchIcon, BellIcon, UserIcon, CogIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 shadow-md">
            <div className="flex justify-around py-3">
                <Link href="/home/dashboard">
                    <div className="flex flex-col items-center text-gray-700">
                        <HomeIcon className="w-6 h-6" />
                        <span className="text-xs">Home</span>
                    </div>
                </Link>
                <Link href="/home/search">
                    <div className="flex flex-col items-center text-gray-700">
                        <SearchIcon className="w-6 h-6" />
                        <span className="text-xs">Search</span>
                    </div>
                </Link>
                <Link href="/home/notifications">
                    <div className="flex flex-col items-center text-gray-700">
                        <BellIcon className="w-6 h-6" />
                        <span className="text-xs">Notifications</span>
                    </div>
                </Link>
                <Link href="/home/profile">
                    <div className="flex flex-col items-center text-gray-700">
                        <UserIcon className="w-6 h-6" />
                        <span className="text-xs">Profile</span>
                    </div>
                </Link>
                <Link href="/home/settings">
                    <div className="flex flex-col items-center text-gray-700">
                        <CogIcon className="w-6 h-6" />
                        <span className="text-xs">Settings</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
