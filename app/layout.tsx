import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faraz's Portfolio",
  description:
    "Are you looking for a creative and professional web developer? Check out my portfolio and see why I'm the best fit for your project. I have experience in Typecript, React, Next.js and more. Contact me today and let's get started!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Faraz's Portfolio</title>
        <meta property="og:title" content="Fabian Faraz Farid | Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/S7MxkxN/DP7.png" />
        <meta property="og:url" content="https://www.farazfarid.me/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="Are you looking for a creative and professional web developer? Check out my portfolio and see why I'm the best fit for your project. I have experience in HTML, CSS, JavaScript and more. Contact me today and let's get started!"
        />
        <meta
          property="og:site_name"
          content="Fabian Faraz Farid | Portfolio"
        />
        <meta name="twitter:image:alt" content="Fabian Faraz Farid" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
