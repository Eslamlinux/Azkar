import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {

    title: "موقع الأذكار الإسلامية - أذكار الصباح والمساء والأدعية من القرآن والسنة",
  description: "موقع شامل للأذكار والأدعية الإسلامية المأثورة من القرآن الكريم والسنة النبوية. أكثر من 150 ذكر ودعاء مع عدادات تفاعلية وحفظ التقدم. أذكار الصباح والمساء، أدعية الأنبياء، الاستغفار، الرزق والمزيد.",
  keywords: [
    "أذكار",
    "أذكار الصباح",
    "أذكار المساء", 
    "أدعية إسلامية",
    "أدعية القرآن",
    "أدعية الأنبياء",
    "استغفار",
    "أدعية الرزق",
    "ذكر الله",
    "تسبيح",
    "دعاء",
    "قرآن",
    "سنة نبوية",
    "إسلام",
    "مسلم"
  ],
  authors: [{ name: "Eslam Linux", url: "https://eslamlinux.github.io" }],
  creator: "Eslam Linux",
  publisher: "Eslam Linux",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://eslamlinux.github.io/Azkar/",
    title: "موقع الأذكار الإسلامية - أذكار الصباح والمساء والأدعية",
    description: "موقع شامل للأذكار والأدعية الإسلامية المأثورة من القرآن الكريم والسنة النبوية. أكثر من 150 ذكر ودعاء مع عدادات تفاعلية.",
    siteName: "موقع الأذكار الإسلامية",
  },
  twitter: {
    card: "summary_large_image",
    title: "موقع الأذكار الإسلامية - أذكار الصباح والمساء والأدعية",
    description: "موقع شامل للأذكار والأدعية الإسلامية المأثورة من القرآن الكريم والسنة النبوية",
  },
  alternates: {
    canonical: "https://eslamlinux.github.io/Azkar/",
  },
  category: "religion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
