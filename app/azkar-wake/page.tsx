"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

interface ZikrItem {
  id: number
  arabic: string
  count: number
  source: string
}

const wakeAzkar: ZikrItem[] = [
  {
    id: 1,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 3,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 4,
    arabic: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 5,
    arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ، وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
    count: 1,
    source: "أبو داود والترمذي",
  },
  {
    id: 6,
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    count: 1,
    source: "الترمذي",
  },
]

export default function AzkarWakePage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      wakeAzkar.forEach((zikr) => {
        const saved = localStorage.getItem(`wake-zikr-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
    }

    updateCompletedCount()
    const interval = setInterval(updateCompletedCount, 1000)
    return () => clearInterval(interval)
  }, [])

  const progressPercentage = (completedCount / wakeAzkar.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation currentPage="azkar-wake" />
   {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">أذكار الاستيقاظ</h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span>
              التقدم: {completedCount}/{wakeAzkar.length}
            </span>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {wakeAzkar.map((zikr) => (
            <SharedZikrCard
              key={zikr.id}
              zikr={{
                id: zikr.id,
                text: zikr.arabic,
                count: zikr.count,
                source: zikr.source,
              }}
              storageKey="wake-zikr"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
