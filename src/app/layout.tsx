import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globalicons.css";
import Header from "@/components/Header";
import { ReactNode } from "react";
import Main from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dakken MTG Slide Maker",
  description: "Generate dakken meeting slide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body className={inter.className}>
        <Header />
        <Main content={children} />
      </body>
    </html>
  );
}
