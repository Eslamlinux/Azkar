"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const miscAzkar = [
  {
    id: 1,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 100,
    source: "البخاري",
  },
  {
    id: 2,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: 100,
    source: "البخاري",
  },
  {
    id: 3,
    arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ",
    count: 10,
    source: "الترمذي",
  },
  {
    id: 4,
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    count: 3,
    source: "أبو داود",
  },
  {
    id: 5,
    arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
    count: 3,
    source: "البخاري",
  },
  {
    id: 6,
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    count: 1,
    source: "الترمذي",
  },
 {
    id: 7,
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    count: 7,
    source: "البخاري",
  },
]

export default function AzkarMiscPage() {
  const [completedCount, setCompletedCount] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      miscAzkar.forEach((zikr) => {
        const saved = localStorage.getItem(`azkar-misc-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
      setTotalProgress(Math.round((completed / miscAzkar.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950">
      <Navigation currentPage="/azkar-misc" />

      <header className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">أذكار متنوعة</h1>
            <p className="text-lg opacity-90 mb-6">مجموعة من الأذكار المتنوعة للتسبيح والاستغفار والدعاء</p>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>التقدم الإجمالي</span>
                <span>
                  {completedCount} / {miscAzkar.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${totalProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

   
