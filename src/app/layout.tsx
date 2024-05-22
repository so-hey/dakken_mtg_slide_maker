import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globalicons.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dakken MTG Slide Maker",
  description: "Generate dakken meeting slide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body className={inter.className}>
        <header style={{ height: "5vh", overflow: "hidden" }}>
          <nav
            className="navbar bg-dark border-bottom border-bottom-dark"
            data-bs-theme="dark"
          >
            <div className="container text-center">
              <div className="row mt-0 justify-content-md-center mh-100">
                <div
                  className="col col-md-auto mh-100"
                  style={{ color: "white" }}
                >
                  Dakken-MTG-Slide-Maker
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main style={{ height: "95vh", overflow: "hidden" }}> {children}</main>
      </body>
    </html>
  );
}
