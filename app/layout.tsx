import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import LoadingWrapper from "@/components/defined-ui/loadingWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scitech Council | IIT Bhilai",
  description:
    "This is the official site of the Scitech Council of IIT Bhilai and it contains all the information related to the scitech council of IIT Bhilai and also related bodies and events",
  icons: "./scitech-new-logo.jpeg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={spaceGrotesk.className}>
          <LoadingWrapper>{children}</LoadingWrapper>
        </div>
      </body>
    </html>
  );
}
