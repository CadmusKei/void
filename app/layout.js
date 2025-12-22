
import { Courier_Prime } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Void"
};

export const viewport = {
  themeColor: "#0c0f1b",
  colorScheme: "dark",
};

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
});

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`${courier.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
