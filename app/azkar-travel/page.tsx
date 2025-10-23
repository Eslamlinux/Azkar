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

const travelAzkar: ZikrItem[] = [
  {
    id: 1,
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    count: 1,
    source: "الزخرف: 13-14",
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ اصْحَبْنَا فِي سَفَرِنَا، وَاخْلُفْنَا فِي أَهْلِنَا",
    count: 1,
    source: "مسلم",
  },
  {
    id: 4,
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
    count: 1,
    source: "مسلم",
  },
  {
    id: 5,
    arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    count: 1,
    source: "البخاري ومسلم",
  },
]

export default function AzkarTravelPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      travelAzkar.forEach((zikr) => {
        const saved = localStorage.getItem(`zikr-count-azkar-travel-${zikr.id}`)
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

  const progressPercentage = (completedCount / travelAzkar.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation currentPage="azkar-travel" />

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">أذكار السفر</h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span>
              التقدم: {completedCount}/{travelAzkar.length}

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
          {travelAzkar.map((zikr) => (
            <SharedZikrCard
              key={zikr.id}
              zikr={zikr}
              storageKey={`azkar-travel-${zikr.id}`}
              accentColor="from-slate-800 to-slate-700"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

