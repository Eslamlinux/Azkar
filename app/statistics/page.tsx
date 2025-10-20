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
 <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* إحصائيات عامة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-3">{totalCompleted}</div>
                <div className="text-emerald-100 text-lg">إجمالي الأذكار المكتملة</div>
                <div className="text-sm text-emerald-200 mt-2">من أصل {totalAzkar} ذكر</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-3">{overallPercentage}%</div>
                <div className="text-amber-100 text-lg">نسبة الإنجاز الكلية</div>
                <div className="w-full bg-white/30 rounded-full h-2 mt-4">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${overallPercentage}%` }}
                  />
                </div>
              </CardContent>
            </Card>


            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-3">{currentStreak} 🔥</div>
                <div className="text-purple-100 text-lg">أيام متتالية</div>
                <div className="text-sm text-purple-200 mt-2">استمر في التقدم!</div>
              </CardContent>
            </Card>
          </div>

          {/* إحصائيات تفصيلية لكل قسم */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">التقدم في كل قسم</h2>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-gray-800">{stat.displayName}</h3>
                        <Badge
                          variant={stat.percentage === 100 ? "default" : "secondary"}
                          className={
                            stat.percentage === 100 ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700"
                          }
                        >
                          {stat.completed}/{stat.total}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-emerald-600">{stat.percentage}%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          stat.percentage === 100
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                            : "bg-gradient-to-r from-amber-500 to-orange-500"
                        }`}
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* رسالة تحفيزية */}

