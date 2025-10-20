"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarToiletExit = [
  {
    id: 1,
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    translation: "أستغفرك يا الله",
    count: 1,
    source: "أبو داود والترمذي",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي",
    transliteration: "Alhamdu lillahi alladhi adhhaba anni al-adha wa 'afani",
    translation: "الحمد لله الذي أذهب عني الأذى وعافاني",
    count: 1,
    source: "ابن ماجه",
  },
]

export default function AzkarToiletExitPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarToiletExit.forEach((zikr) => {
        const saved = localStorage.getItem(`toilet-exit-zikr-${zikr.id}`)
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

  const overallProgress = (completedCount / azkarToiletExit.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation currentPage="azkar-toilet-exit" />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">أذكار الخروج من الخلاء</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            الأذكار المستحبة عند الخروج من الخلاء للحمد والاستغفار
          </p>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 dark:text-gray-200 font-medium">التقدم الإجمالي</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {completedCount}/{azkarToiletExit.length}
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

        <div className="grid gap-6 max-w-4xl mx-auto">
          {azkarToiletExit.map((zikr, index) => (
            <SharedZikrCard key={zikr.id} zikr={zikr} storageKey={`toilet-exit-zikr-${zikr.id}`} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">فضل الحمد والاستغفار عند الخروج</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              حمد الله والاستغفار عند الخروج من الخلاء سنة مستحبة، وهو شكر لله على نعمة إخراج الأذى من الجسم وطلب
              المغفرة. هذا الذكر يطهر النفس ويذكر المسلم بنعم الله العظيمة في كل لحظة من حياته.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
