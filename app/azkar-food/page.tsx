"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

interface Zikr {
  id: number
  arabic: string
  count: number
  source: string
}

const azkarFood: Zikr[] = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 4,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 5,
    arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي",
    count: 1,
    source: "مسلم",
  },
]

export default function AzkarFoodPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarFood.forEach((zikr) => {
        const saved = localStorage.getItem(`zikr-count-azkar-food-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  const overallProgress = (completedCount / azkarFood.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation currentPage="azkar-food" />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary dark:from-primary/80 dark:to-secondary/80 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">أذكار الطعام</h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span>
              التقدم: {completedCount}/{azkarFood.length}
            </span>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white transition-all duration-300" style={{ width: `${overallProgress}%` }} />
            </div>
            <span>{Math.round(overallProgress)}%</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {azkarFood.map((zikr) => (
            <SharedZikrCard
              key={zikr.id}
              zikr={zikr}
              storageKey={`azkar-food-${zikr.id}`}
              accentColor="from-primary to-secondary"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
