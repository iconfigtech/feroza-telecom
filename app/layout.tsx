import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
