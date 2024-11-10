import "./globals.css";
import "./footer/footer.css";
import "./styles.css";

export const metadata = {
  title: "Elle Bee",
  description: "",
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
