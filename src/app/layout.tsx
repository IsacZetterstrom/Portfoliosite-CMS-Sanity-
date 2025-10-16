import Navbar from "@/components/Navbar";
import "./globals.css";
import { NavQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const nav = await client.fetch(NavQuery);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
