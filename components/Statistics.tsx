"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface StatisticsProps {
  totalAzkar: number
  completedToday: number
  currentStreak: number
}

export default function Statistics({ totalAzkar, completedToday, currentStreak }: StatisticsProps) {
  const [totalCompleted, setTotalCompleted] = useState(0)

  useEffect(() => {
    // حساب إجمالي الأذكار المكتملة من جميع الصفحات
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

    setTotalCompleted(total)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold mb-2">{completedToday}</div>
          <div className="text-emerald-100">أذكار اليوم</div>
          <div className="text-sm text-emerald-200 mt-1">من أصل {totalAzkar}</div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold mb-2">{totalCompleted}</div>
          <div className="text-amber-100">إجمالي الأذكار</div>
          <div className="text-sm text-amber-200 mt-1">جميع الأقسام</div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold mb-2">{currentStreak} 🔥</div>
          <div className="text-purple-100">أيام متتالية</div>
          <div className="text-sm text-purple-200 mt-1">استمر في التقدم!</div>
        </CardContent>
      </Card>
    </div>
  )
}
