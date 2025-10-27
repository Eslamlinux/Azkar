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

const azkarMasjid: Zikr[] = [
  {
    id: 1,
    arabic: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    count: 1,
    source: "مسلم",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 4,
    arabic: "اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي وَافْتَحْ لِي أَبْوَابَ فَضْلِكَ",
    count: 1,
    source: "ابن ماجه",
  },
]

export default function AzkarMasjidPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarMasjid.forEach((zikr) => {
        if (localStorage.getItem(`zikr_masjid_${zikr.id}_completed`)) {
          completed++
        }
      })
      setCompletedCount(completed)
    }

    updateProgress()
    const interval = setInterval(updateProgress, 500)
    return () => clearInterval(interval)
  }, [])

  const overallProgress = (completedCount / azkarMasjid.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation currentPage="azkar-masjid" />

      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">أذكار المسجد</h1>
          <div className="flex items-center justify-center gap-4 text-lg">
            <span>
              التقدم: {completedCount}/{azkarMasjid.length}
            </span>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white transition-all duration-300" style={{ width: `${overallProgress}%` }} />
            </div>
            <span>{Math.round(overallProgress)}%</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {azkarMasjid.map((zikr, index) => (
            <SharedZikrCard key={zikr.id} zikr={zikr} index={index} storagePrefix="masjid" />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
