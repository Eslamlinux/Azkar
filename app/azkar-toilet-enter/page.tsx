"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarToiletEnter = [
  {
    id: 1,
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika min al-khubuthi wal-khaba'ith",
    translation: "اللهم إني أعوذ بك من الخبث والخبائث",
    count: 1,
    source: "البخاري ومسلم",
  },
  {
    id: 2,
    arabic: "بِسْمِ اللهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Bismillah, Allahumma inni a'udhu bika min al-khubuthi wal-khaba'ith",
    translation: "بسم الله، اللهم إني أعوذ بك من الخبث والخبائث",
    count: 1,
    source: "أبو داود",
  },
]

export default function AzkarToiletEnterPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarToiletEnter.forEach((zikr) => {
        const saved = localStorage.getItem(`toilet-enter-zikr-${zikr.id}`)
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

  const overallProgress = (completedCount / azkarToiletEnter.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation currentPage="azkar-toilet-enter" />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">أذكار دخول الخلاء</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            الأذكار المستحبة عند دخول الخلاء للاستعاذة من الشياطين
          </p>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 dark:text-gray-200 font-medium">التقدم الإجمالي</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {completedCount}/{azkarToiletEnter.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {overallProgress === 100 ? "مبارك! أكملت جميع الأذكار" : `${Math.round(overallProgress)}% مكتمل`}
            </p>
          </div>
        </div>

