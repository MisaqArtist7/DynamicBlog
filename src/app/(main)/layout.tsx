import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Calculator",
  description: "A Calculator app for doing ",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
