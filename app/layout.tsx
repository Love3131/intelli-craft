import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import MouseGlow from "@/components/MouseGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EruDigm | AI Solutions, Websites & Business Automation",
    template: "%s | EruDigm",
  },
  description:
    "EruDigm builds AI applications, AI agents, websites, business automation, analytics dashboards, and custom software.",
  keywords: [
    "AI Development",
    "AI Agents",
    "Website Development",
    "Business Automation",
    "Analytics Dashboard",
    "Custom Software",
    "EruDigm",
  ],
  authors: [{ name: "EruDigm" }],
  creator: "EruDigm",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuroraBackground />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}