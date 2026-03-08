import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wintermate.fr"),
  title: "Winter Mate - L'app de ski communautaire",
  description:
    "L'app de ski communautaire par Winteractivity. Challenges, sorties entre riders, progression et communauté.",
  openGraph: {
    title: "Winter Mate - L'app de ski communautaire",
    description:
      "L'app de ski communautaire par Winteractivity. Challenges, sorties entre riders, progression et communauté.",
    url: "https://wintermate.fr",
    siteName: "Winter Mate",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Winter Mate - L'app de ski communautaire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Mate - L'app de ski communautaire",
    description:
      "L'app de ski communautaire par Winteractivity. Challenges, sorties entre riders, progression et communauté.",
    images: ["/images/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
