"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarData = [
  {
    id: 1,
    text: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 2,
    text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 3,
    text: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ",
    count: 1,
    source: "الترمذي",
  },
]

export default function AzkarHomeEnterPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarData.forEach((zikr) => {
        const saved = localStorage.getItem(`azkar-home-enter-${zikr.id}`)
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

  const overallProgress = (completedCount / azkarData.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation currentPage="azkar-home-enter" />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">أذكار دخول المنزل</h1>
          <p className="text-slate-600 text-lg mb-6">أذكار وأدعية مستجابة عند دخول المنزل</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-600 font-medium">التقدم الإجمالي</span>
              <span className="text-2xl font-bold text-slate-800">
                {completedCount}/{azkarData.length}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              {overallProgress === 100 ? "تم إكمال جميع الأذكار!" : `${Math.round(overallProgress)}% مكتمل`}
            </p>
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {azkarData.map((zikr) => (
            <SharedZikrCard key={zikr.id} zikr={zikr} storageKey="azkar-home-enter" />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
