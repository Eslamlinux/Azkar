"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Statistics from "@/components/Statistics"
import Link from "next/link"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [completedToday, setCompletedToday] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    let total = 0
    const pages = [
      "azkar-sabah",
      "azkar-masa",
      "azkar-nawm",
      "azkar-salah",
      "azkar-wudu",
      "azkar-masjid",
      "azkar-food",
      "azkar-travel",
      "azkar-wake",
    ]

    pages.forEach((page) => {
      const completed = localStorage.getItem(`${page}-completed`)
      if (completed) {
        total += JSON.parse(completed).length
      }
    })

    setCompletedToday(total)

    const streak = localStorage.getItem("current-streak")
    setCurrentStreak(streak ? Number.parseInt(streak) : 0)
  }, [])

  const azkarSections = [
    {
      title: "أذكار الصباح",
      description: "أذكار وأدعية الصباح المستجابة",
      href: "/azkar-sabah",
      count: "15 ذكر",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
{
      title: "أذكار المساء",
      description: "أذكار وأدعية المساء المباركة",
      href: "/azkar-masa",
      count: "25 ذكر",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      title: "أذكار النوم",
      description: "أذكار ما قبل النوم والراحة",
      href: "/azkar-nawm",
      count: "7 أذكار",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      title: "أذكار الصلاة",
      description: "أذكار ما بعد الصلاة",
      href: "/azkar-salah",
      count: "8 أذكار",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      title: "أذكار المسجد",
      description: "أذكار دخول والخروج من المسجد",
      href: "/azkar-masjid",
      count: "4 أذكار",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "أذكار الوضوء",
      description: "أذكار الوضوء والطهارة",
      href: "/azkar-wudu",
      count: "3 أذكار",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
     {
      title: "أذكار الطعام",
      description: "أذكار قبل وبعد الطعام",
      href: "/azkar-food",
      count: "5 أذكار",
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
    {
      title: "أذكار السفر",
      description: "أذكار السفر والرحلات",
      href: "/azkar-travel",
      count: "5 أذكار",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
    {
      title: "أذكار الاستيقاظ",
      description: "أذكار الاستيقاظ من النوم",
      href: "/azkar-wake",
      count: "6 أذكار",
      color: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
