import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import { AuthProvider } from "../src/context/AuthContext";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "share and discover prompts around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={` antialiased`}>
          <Navigation />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
