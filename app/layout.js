import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pantheon Capital Oversight",
  description: "Pantheon Capital Oversight - Personal autonomous finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        {/* Dark mode enabled by default irrespective of browser preference */}
        <body
          className={`${geistSans.variable} ${geistMono.variable} dark h-screen w-screen overflow-x-hidden bg-black antialiased`}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

/* Notes:

      Layout
        |
      ClerkProvider
        |
      Provider File
        |
      ThemeProvider 
        |
      (Header + { Children -> Eg. page.js })

*/
