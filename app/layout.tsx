import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const ambery = localFont({
  src: "./fonts/ambery.woff2", 
  display: "swap", 
  variable:"--font-ambery"           
});

const miracle = localFont({
  src:"./fonts/miracle.woff2",
  display:"swap",
  variable:"--font-miracle"
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanket Nandurkar — Portfolio",
  description:
    "Final-year Computer Engineering student specialising in Full Stack Development, Backend Engineering, and AI/ML integration. Proficient in Python, Node.js, FastAPI, and React.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ambery.variable}  ${miracle.variable} antialiased`}>
        
        {/* MOVE children INSIDE the page-wrapper */}
        <div className="page-wrapper">
          <main>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
