"use client"

import type React from "react"
import { Amiri, Cairo } from "next/font/google"
/**
 * تحميل خطوط Google Fonts للغة العربية
 * Amiri: خط تقليدي جميل للنصوص العربية الطويلة
 * Cairo: خط حديث وواضح للعناوين والنصوص القصيرة
 */
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-sans ${amiri.variable} ${cairo.variable}`}>{children}</body>
    </html>
  )
}
