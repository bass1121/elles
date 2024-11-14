import "./globals.css";

import "./styles.css";
import Navbar from "./navbar/page.js";
import Footer from "./footer/page.js"

export const metadata = {
  title: "Elle Bee",
  description: "A website for Elle Bee Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
