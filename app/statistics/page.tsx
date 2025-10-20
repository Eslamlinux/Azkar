"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PageStats {
  name: string
  displayName: string
  total: number
  completed: number
  percentage: number
}

export default function StatisticsPage() {
  const [stats, setStats] = useState<PageStats[]>([])
  const [totalCompleted, setTotalCompleted] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    const pages = [
      { name: "azkar-sabah", displayName: "أذكار الصباح", total: 15 },
      { name: "azkar-masa", displayName: "أذكار المساء", total: 25 },
      { name: "azkar-nawm", displayName: "أذكار النوم", total: 10 },
      { name: "azkar-salah", displayName: "أذكار الصلاة", total: 8 },
      { name: "azkar-wudu", displayName: "أذكار الوضوء", total: 5 },
      { name: "azkar-masjid", displayName: "أذكار المسجد", total: 6 },
      { name: "azkar-food", displayName: "أذكار الطعام", total: 8 },
      { name: "azkar-travel", displayName: "أذكار السفر", total: 7 },
      { name: "azkar-wake", displayName: "أذكار الاستيقاظ", total: 6 },
    ]

    const pageStats: PageStats[] = []
    let total = 0

    pages.forEach((page) => {
      const completed = localStorage.getItem(`${page.name}-completed`)
      const completedCount = completed ? JSON.parse(completed).length : 0
      total += completedCount

      pageStats.push({
        name: page.name,
        displayName: page.displayName,
        total: page.total,
        completed: completedCount,
        percentage: Math.round((completedCount / page.total) * 100),
      })
    })
setStats(pageStats)
    setTotalCompleted(total)

    // حساب السلسلة المتتالية
    const streak = localStorage.getItem("current-streak")
    setCurrentStreak(streak ? Number.parseInt(streak) : 0)
  }, [])

  const totalAzkar = stats.reduce((sum, stat) => sum + stat.total, 0)
  const overallPercentage = totalAzkar > 0 ? Math.round((totalCompleted / totalAzkar) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation currentPage="statistics" />

      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">📊 إحصائياتي</h1>
          <p className="text-purple-100 text-lg">تتبع تقدمك في الأذكار اليومية</p>
        </div>
      </header>

