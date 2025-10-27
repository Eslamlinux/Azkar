"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const duas = [
  {
    id: 1,
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    count: 3,
    source: "البقرة: 201",
  },
  {
    id: 2,
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    count: 1,
    source: "طه: 25-28",
  },
  {
    id: 3,
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    count: 3,
    source: "آل عمران: 8",
  },
  {
    id: 4,
    arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
    count: 3,
    source: "المؤمنون: 97-98",
  },
  {
    id: 5,
    arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    count: 3,
    source: "آل عمران: 147",
  },
  {
    id: 6,
    arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    count: 3,
    source: "إبراهيم: 40",
  },
  {
    id: 7,
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    count: 1,
    source: "الفرقان: 74",
  },
  {
    id: 8,
    arabic: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا",
    count: 1,
    source: "الإسراء: 80",
  },
]

export default function QuranDuasPage() {
  const [completedCount, setCompletedCount] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      duas.forEach((dua) => {
        const saved = localStorage.getItem(`quran-duas-${dua.id}`)
        if (saved && Number.parseInt(saved) >= dua.count) {
          completed++
        }
      })

  setCompletedCount(completed)
      setTotalProgress(Math.round((completed / duas.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <Navigation currentPage="/quran-duas" />

      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">أدعية من القرآن</h1>
            <p className="text-lg opacity-90 mb-6">أدعية مباركة من كتاب الله العزيز</p>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>التقدم الإجمالي</span>
                <span>
                  {completedCount} / {duas.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${totalProgress}%` }}
                ></div>
		  </div>
              <p className="text-sm mt-2 opacity-90">
                {totalProgress === 100 ? "تم إكمال جميع الأدعية!" : "استمر في الدعاء بهذه الأدعية المباركة"}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {duas.map((dua, index) => (
              <SharedZikrCard key={dua.id} zikr={dua} index={index} storageKey="quran-duas" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Separator className="mb-8 bg-border" />
            <Card className="p-8 hover-lift border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">فضل الدعاء بأدعية القرآن</h3>
                <p className="text-muted-foreground leading-relaxed">
                  هذه الأدعية المباركة وردت في القرآن الكريم، وهي من أجمع الأدعية وأنفعها. ادع بها في أوقات الإجابة
                  واجعلها من أورادك اليومية، فإن الله تعالى علمنا إياها لحكمة عظيمة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

