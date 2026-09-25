import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feroza-telecom.vercel.app"),
  title: "Feroza Telecom FZCO",
  description:
    "Feroza Telecom FZCO — B2B iPhone refurbishment and wholesale from Dubai. Graded stock, a sample you can inspect, then volume for retailers and distributors.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Feroza Telecom FZCO",
    description: "B2B iPhone refurbishment and wholesale from Dubai CommerCity.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}