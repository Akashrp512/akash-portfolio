import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Akash RP | Full-Stack Developer: React, Node.js, and AWS",
  description: "Showcasing the skills and projects of Akash RP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-background-primary text-foreground-dark dark:text-foreground-light mx-auto min-h-screen max-w-screen-xl px-6 lg:px-24 py-12 lg:py-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
