import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Casa Cala Alquiler Villa Gesell",
    description: "Departamentos de verano en Villa gesell",
    metadataBase: new URL("https://casa-cala.vercel.app/"),
    openGraph: {
        title: "Casa Cala Alquiler Villa Gesell",
        description: "Departamentos de verano en Villa gesell",
        url: "https://casa-cala.vercel.app/",
        siteName: "Casa Cala",
        type: "website",
        images: [
            {
                url: "https://casa-cala.vercel.app/images/fachada.png",
                width: 1200,
                height: 630,
                alt: "Casa Cala fachada",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Casa Cala Alquiler Villa Gesell",
        description: "Departamentos de verano en Villa gesell",
        images: ["https://casa-cala.vercel.app/images/fachada.png"],
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
