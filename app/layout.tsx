import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Viora Tech",
  description: "Coming soon",
  metadataBase: new URL(
    process.env.NEXT_PUBIC_BASE_URL || "https://www.vioratech.in"
  ),
  openGraph: {
    images: `/og.jpg`,
    title: "Viora Tech",
    description: "Coming soon",
    url: new URL(process.env.NEXT_PUBIC_BASE_URL || "https://www.vioratech.in"),
    type: "website",
    siteName: "Viora Tech",
  },
  twitter: {
    title: "Viora Tech",
    description: "Coming soon",
    card: "summary_large_image",
    images: `/og.jpg`,
    site: "Viora Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
