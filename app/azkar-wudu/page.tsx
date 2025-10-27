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

const azkarWudu: Zikr[] = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ",
    count: 1,
    source: "أبو داود والترمذي",
  },
  {
    id: 2,
    arabic: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ",
    count: 1,
    source: "مسلم",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 4,
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    count: 1,
    source: "النسائي",
  },
]

export default function AzkarWuduPage() {
  const [totalProgress, setTotalProgress] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarWudu.forEach((zikr) => {
        if (localStorage.getItem(`zikr_wudu_${zikr.id}_completed`)) {
          completed++
        }
      })
      setCompletedCount(completed)
      setTotalProgress(Math.round((completed / azkarWudu.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 500)
    return () => clearInterval(interval)
  }, [])
 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Navigation currentPage="azkar-wudu" />

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">أذكار الوضوء</h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
            <div className="flex items-center gap-4">
              <div className="text-sm">التقدم اليومي</div>
              <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500 ease-out"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
              <div className="text-sm font-bold">
                {completedCount}/{azkarWudu.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {azkarWudu.map((zikr, index) => (
            <SharedZikrCard key={zikr.id} zikr={zikr} index={index} storagePrefix="wudu" />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
