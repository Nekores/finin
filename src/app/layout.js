// import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./globals.css";

import InstallBootstrap from "@/components/installBootstrap";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finlete",
  description: "Finlete meta description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
