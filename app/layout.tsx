 import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "wsquare digital",
  description: "Powering the Technology Behind Your Business",
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public folder
  },
};

// icons: {
//   icon: [
//     { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
//     { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
//     { rel: 'icon', href: '/favicon.ico' }, // Default favicon
//   ],
// },

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


{/* <body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
{children}
</body> */}