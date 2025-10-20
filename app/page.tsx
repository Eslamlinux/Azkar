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

