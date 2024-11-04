import "./globals.css";


export const metadata = {
  title: "Youtube API",
  description: "Experimenting and playing around with youtube API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
