"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const miscAzkar = [
  {
    id: 1,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 100,
    source: "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان.",
  },
  {
    id: 2,
    arabic: "سُبْحَانَ اللَّهِ",
    count: 100,
    source: "يكتب له ألف حسنة أو يحط عنه ألف خطيئة.",
  },  
  {
    id: 3,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: 100,
    source: "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ.",
  },
  {
    id: 4,
    arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ",
    count: 100,
    source: "غرست له نخلة في الجنة (أى عدد).",
  },
    {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ ",
    count: 100,
    source: "ثقيلتان في الميزان حبيبتان إلى الرحمن (أى عدد).",
  },
  {
    id: 6,
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    count: 3,
    source: "أبو داود",
  },
  {
    id: 7,
    arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
    count: 3,
    source: "البخاري",
  },
  {
    id: 8,
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    count: 1,
    source: "الترمذي",
  },
 {
    id: 9,
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    count: 7,
    source: "البخاري",
  },
   {
    id: 10,
    arabic: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
    count: 100,
    source: "تملأ ميزان العبد بالحسنات.",
  },
   {
    id: 11,
    arabic: "لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ ",
    count: 100,
    source: "البخاري",
  },
   {
    id: 12,
    arabic: "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد",
    count: 100,
    source: "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة.",
  },
     {
    id: 13,
    arabic: "أستغفر الله",
    count: 100,
    source: "لفعل الرسول صلى الله عليه وسلم.",
  },
   {
    id: 14,
    arabic: "سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ ",
    count: 100,
    source: "أنهن أحب الكلام الى الله، ومكفرات للذنوب، وغرس الجنة، وجنة لقائلهن من النار، وأحب الى النبي عليه السلام مما طلعت عليه الشمس، والْبَاقِيَاتُ الْصَّالِحَات.",
  },
   {
    id: 15,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ ",
    count: 15,
    source: "أفضل الذكر لا إله إلاّ الله.",
  },
   {
    id: 16,
    arabic: "الْلَّهُ أَكْبَرُ",
    count: 100,
    source: "من قال الله أكبر كتبت له عشرون حسنة وحطت عنه عشرون سيئة. الله أكبر من كل شيء.",
  },
   {
    id: 17,
    arabic: "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي. ",
    count: 100,
    source: "خير الدنيا والآخرة ",
  },
   {
    id: 18,
    arabic: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. ",
    count: 100,
    source: "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ '‏لَقَدْ رَأَيْتُ اثْنَيْ عَشَرَ مَلَكًا يَبْتَدِرُونَهَا، أَيُّهُمْ يَرْفَعُهَا'‏.",
  },
   {
    id: 19,
    arabic: "اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً. ",
    count: 100,
    source: "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ 'عَجِبْتُ لَهَا ، فُتِحَتْ لَهَا أَبْوَابُ السَّمَاءِ'",
  },

  {
    id: 20,
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. ",
    count: 100,
    source: "في كل مره تحط عنه عشر خطايا ويرفع له عشر درجات ويصلي الله عليه عشرا وتعرض على الرسول صلى الله عليه وسلم (أى عدد).",
  },
  
]

export default function AzkarMiscPage() {
  const [completedCount, setCompletedCount] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      miscAzkar.forEach((zikr) => {
        const saved = localStorage.getItem(`azkar-misc-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
      setTotalProgress(Math.round((completed / miscAzkar.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950">
      <Navigation currentPage="/azkar-misc" />

      <header className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">أذكار متنوعة</h1>
            <p className="text-lg opacity-90 mb-6">مجموعة من الأذكار المتنوعة للتسبيح والاستغفار والدعاء</p>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>التقدم الإجمالي</span>
                <span>
                  {completedCount} / {miscAzkar.length}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${totalProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

       <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {miscAzkar.map((zikr, index) => (
              <SharedZikrCard key={zikr.id} zikr={zikr} index={index} storageKey="azkar-misc" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Separator className="mb-8 bg-border" />
            <Card className="p-8 hover-lift border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">فضل الأذكار المتنوعة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  هذه مجموعة من الأذكار المتنوعة التي يستحب الإكثار منها في جميع الأوقات، فهي تطهر القلب وتزكي النفس
                  وتقرب العبد من ربه، وفيها أجر عظيم وثواب جزيل.
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
