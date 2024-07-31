import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
//import Client from "@/lib/Client";

export const metadata = {
  title: "Skildesk ",
  description: "Get the best talent for your job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
