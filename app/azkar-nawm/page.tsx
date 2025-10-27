"use client"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"


/**
 * بيانات أذكار النوم الشاملة من المصادر الإسلامية الأصيلة
 * تشمل الأذكار المأثورة من القرآن والسنة النبوية
 */
 
const azkarNawmData = [
  {
    id: 1,
    arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    count: 1,
    source: "رواه البخاري",
  },
  {
    id: 2,
    arabic:
      "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    count: 1,
    source: "رواه مسلم",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    count: 3,
    source: "رواه أبو داود",
  },
  {
    id: 4,
    arabic: "بِاسْمِ اللَّهِ أَمُوتُ وَأَحْيَا",
    count: 1,
    source: "رواه البخاري",
  },
  {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
    count: 33,
    source: "رواه مسلم",
  },
   {
    id: 6,
    arabic:
      "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
    count: 1,
    source: "رواه البخاري ومسلم",
  },
  {
    id: 7,
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ",
    count: 1,
    source: "رواه مسلم",
  },
]

export default function AzkarNawmPage() {
  const [totalProgress, setTotalProgress] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarNawmData.forEach((zikr) => {
        if (localStorage.getItem(`zikr_nawm_${zikr.id}_completed`)) {
          completed++
        }
      })
      setCompletedCount(completed)
      setTotalProgress(Math.round((completed / azkarNawmData.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 500)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="min-h-screen bg-background spiritual-gradient">
      <Navigation currentPage="azkar-nawm" />

      <header className="bg-primary text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">أذكار النوم</h1>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>التقدم اليومي</span>
                <span>
                  {completedCount}/{azkarNawmData.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-secondary h-3 rounded-full transition-all duration-1000 animate-shimmer"
                  style={{ width: `${totalProgress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 opacity-90">{totalProgress}% مكتمل</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {azkarNawmData.map((zikr, index) => (
              <SharedZikrCard key={zikr.id} zikr={zikr} index={index} storagePrefix="nawm" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Separator className="mb-8 bg-border" />
            <Card className="p-8 hover-lift border-primary/20">
              <CardContent className="p-0">
                <p className="text-foreground text-xl font-semibold mb-3 animate-pulse-gentle">
                  "وَاذْكُرُوا اللَّهَ كَثِيرًا لَعَلَّكُمْ تُفْلِحُونَ"
                </p>
                <p className="text-muted-foreground">سورة الأنفال - آية 45</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
