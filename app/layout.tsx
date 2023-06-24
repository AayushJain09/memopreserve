import { Cabin } from "next/font/google"

import { cn } from "@/lib/utils"

import "@/styles/globals.css"

// import { Hoves } from "@/lib/fonts";
// import { Toaster } from "@/components/toaster";

interface RootLayoutProps {
  children: React.ReactNode
}

// import { Analytics } from "@/components/analytics";

export const metadata = {
  title: {
    default: "Memopreserve",
    template: `%s — Memopreserve`,
  },
  description: "A digital memory vault for humans.",
  keywords: ["memory", "digital", "family", "vault", "online"],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memopreserve.com/",
    title: "Memopreserve",
    description: "A virtual memory vault for everyone.",
    siteName: "MemoPreserve",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `https://memopreserve.com/site.webmanifest`,
}

const cabin = Cabin({
  subsets: ["latin"],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          cabin.className
        )}
      >
        {children}
        {/* <Toaster />
        <Analytics /> */}
      </body>
    </html>
  )
}
