import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share Free",
  description: "Share Free PWA",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Vikash Kumar" },
    {
      name: "Vikash Kumar",
      url: "https://www.linkedin.com/in/sharma-vikashkr/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center sm:max-w-md px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full md:rounded-lg md:shadow md:shadow-gray-300">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
