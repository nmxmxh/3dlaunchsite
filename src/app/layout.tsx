import type { Metadata } from "next";
import Providers from "@/lib/providers";
import { ThreeLayout } from "@/components/r3f/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <ThreeLayout>{children}</ThreeLayout>
        </body>
      </Providers>
    </html>
  );
}
