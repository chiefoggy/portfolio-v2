import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Soin Wei Dong | Portfolio",
    description: "Recent Junior College Graduate & Tech Enthusiast",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.variable}>
                <Providers>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
