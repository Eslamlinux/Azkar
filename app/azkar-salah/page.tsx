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

const azkarSalah: Zikr[] = [
  {
    id: 1,
    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    count: 3,
    source: "أبو داود والترمذي",
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
    count: 1,
    source: "مسلم",
  },
  {
    id: 3,
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ وَلاَ مُعْطِيَ لِمَا مَنَعْتَ وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    count: 1,
    source: "البخاري ومسلم",
  },
  {
    id: 4,
    arabic: "لا إلهَ إلاّ اللّه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون. ",
    count: 10,
    source: "مسلم",
  },
  {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ",
    count: 33,
    source: "البخاري ومسلم",
  },
  {
    id: 6,
    arabic: "الْحَمْدُ لِلَّهِ",
    count: 33,
    source: "البخاري ومسلم",
  },
  {
    id: 7,
    arabic: "اللَّهُ أَكْبَرُ",
    count: 34,
    source: "البخاري ومسلم",
  },
  {
    id: 8,
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 1,
    source: "مسلم",
  },
  
  
    {
    id: 9,
    arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم<br /> قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
    count: 3,
    source: "سورة الاخلاص",
  },
    {
    id: 10,
    arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم<br />قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
    count: 3,
    source: "سورة الفلق",
  },
    {
    id: 11,
    arabic: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم<br />قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
    count: 3,
    source: "سورة الناس",
  },
    {
    id: 12,
    arabic: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ<br />اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
    count: 1,
    source: " [آية الكرسى - البقرة 255]",
  },
    {
    id: 13,
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 10,
    source: "عَشْر مَرّات بَعْدَ المَغْرِب وَالصّـبْح.",
  },
    {
    id: 14,
    arabic: "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً. ",
    count: 1,
    source: "بَعْد السّلامِ من صَلاةِ الفَجْر.",
  },
    {
    id: 15,
    arabic: "اللَّهُمَّ أَجِرْنِي مِنْ النَّار. ",
    count: 1,
    source: "بعد صلاة الصبح والمغرب.",
  },
    {
    id: 15,
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ. ",
    count: 1,
    source: "",
  },
]

export default function AzkarSalahPage() {
  const [totalCompleted, setTotalCompleted] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarSalah.forEach((zikr) => {
        const saved = localStorage.getItem(`zikr-count-azkar-salah-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setTotalCompleted(completed)
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  const totalAzkar = azkarSalah.length
  const overallProgress = (totalCompleted / totalAzkar) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <Navigation currentPage="azkar-salah" />

     {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">أذكار الصلاة</h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
            <div className="flex items-center gap-4">
              <div className="text-sm">التقدم اليومي</div>
              <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500 ease-out"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="text-sm font-bold">
                {totalCompleted}/{totalAzkar}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {azkarSalah.map((zikr) => (
            <SharedZikrCard
              key={zikr.id}
              zikr={zikr}
              storageKey={`azkar-salah-${zikr.id}`}
              accentColor="from-amber-500 to-orange-500"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}