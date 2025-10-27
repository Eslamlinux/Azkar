"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Heart, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function AdeyatIstighfarPage() {
  const [completedDuas, setCompletedDuas] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const completed = localStorage.getItem("adeyat-istighfar-completed")
    const favs = localStorage.getItem("adeyat-istighfar-favorites")
    if (completed) setCompletedDuas(JSON.parse(completed))
    if (favs) setFavorites(JSON.parse(favs))
  }, [])

  const duas = [
    {
      id: 1,
      arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
      transliteration: "Astaghfiru Allah al-'Azeem alladhi la ilaha illa Huwa al-Hayyu al-Qayyum wa atubu ilaih",
      translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
      meaning: "أطلب المغفرة من الله العظيم الذي لا معبود بحق إلا هو الحي القيوم وأتوب إليه",
      reference: "سيد الاستغفار",
      count: 100,
      category: "استغفار عام"
    },
    {
      id: 2,
      arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      transliteration: "Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika ma istat'at, a'udhu bika min sharri ma sana't, abu'u laka bi ni'matika 'alayy, wa abu'u laka bi dhanbi faghfir li, fa innahu la yaghfiru adh-dhunuba illa ant",
      translation: "اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا على عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت أبوء لك بنعمتك علي وأبوء لك بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
      meaning: "اللهم أنت ربي لا معبود بحق إلا أنت، خلقتني وأنا عبدك، وأنا ملتزم بعهدك ووعدك قدر استطاعتي، أعوذ بك من شر ما عملت، أقر لك بنعمتك علي وأعترف بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
      reference: "صحيح البخاري - سيد الاستغفار",
      count: 1,
      category: "سيد الاستغفار"
    },
    {
      id: 3,
      arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي",
      transliteration: "Rabbi ighfir li dhanbi wa khata'i wa jahli wa israfi fi amri wa ma anta a'lamu bihi minni",
      translation: "رب اغفر لي ذنبي وخطئي وجهلي وإسرافي في أمري وما أنت أعلم به مني",
      meaning: "يا رب اغفر لي ذنبي وخطئي وجهلي وتجاوزي في أمري وما تعلمه من أخطائي أكثر مني",
      reference: "صحيح البخاري ومسلم",
      count: 3,
      category: "استغفار شامل"
    },
    {
      id: 4,
      arabic: "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ",
      transliteration: "Allahumma ighfir li ma qaddamtu wa ma akhkhart, wa ma asrartu wa ma a'lant, wa ma asraft, wa ma anta a'lamu bihi minni, anta al-muqaddimu wa anta al-mu'akhkhir, la ilaha illa ant",
      translation: "اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت وما أسرفت وما أنت أعلم به مني أنت المقدم وأنت المؤخر لا إله إلا أنت",
      meaning: "اللهم اغفر لي ما فعلت في الماضي وما سأفعل في المستقبل، وما أخفيت وما أظهرت، وما تجاوزت فيه، وما تعلمه من ذنوبي، أنت المقدم والمؤخر، لا معبود بحق إلا أنت",
      reference: "صحيح مسلم",
      count: 1,
      category: "استغفار شامل"
    },
    {
      id: 5,
      arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
      transliteration: "Allahumma inni zalamtu nafsi zulman kathiran, wa la yaghfiru adh-dhunuba illa ant, faghfir li maghfiratan min 'indik, warhamni, innaka anta al-Ghafuru ar-Rahim",
      translation: "اللهم إني ظلمت نفسي ظلماً كثيراً ولا يغفر الذنوب إلا أنت فاغفر لي مغفرة من عندك وارحمني إنك أنت الغفور الرحيم",
      meaning: "اللهم إني أخطأت في حق نفسي خطأً كبيراً، ولا يغفر الذنوب إلا أنت، فاغفر لي مغفرة من عندك وارحمني، إنك أنت الغفار الرحيم",
      reference: "صحيح البخاري ومسلم",
      count: 1,
      category: "استغفار من الظلم"
    },
    {
      id: 6,
      arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      transliteration: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakūnanna min al-khasirin",
      translation: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
      meaning: "يا ربنا أخطأنا في حق أنفسنا وإن لم تغفر لنا وترحمنا فسنكون من الخاسرين",
      reference: "الأعراف: 23",
      count: 3,
      category: "استغفار من القرآن"
    },
    {
      id: 7,
      arabic: "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
      transliteration: "La ilaha illa anta subhanaka inni kuntu min az-zalimin",
      translation: "لا إله إلا أنت سبحانك إني كنت من الظالمين",
      meaning: "لا معبود بحق إلا أنت، سبحانك، إني كنت من المخطئين",
      reference: "الأنبياء: 87 - دعوة ذي النون",
      count: 3,
      category: "دعوة ذي النون"
    },
    {
      id: 8,
      arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
      transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
      translation: "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
      meaning: "اللهم ساعدني على ذكرك وشكرك وأداء عبادتك على أحسن وجه",
      reference: "سنن أبي داود",
      count: 3,
      category: "دعاء التوفيق"
    }
  ]

  const handleComplete = (duaId: number) => {
    const newCompleted = completedDuas.includes(duaId)
      ? completedDuas.filter(id => id !== duaId)
      : [...completedDuas, duaId]
    
    setCompletedDuas(newCompleted)
    localStorage.setItem("adeyat-istighfar-completed", JSON.stringify(newCompleted))
  }

  const handleFavorite = (duaId: number) => {
    const newFavorites = favorites.includes(duaId)
      ? favorites.filter(id => id !== duaId)
      : [...favorites, duaId]
    
    setFavorites(newFavorites)
    localStorage.setItem("adeyat-istighfar-favorites", JSON.stringify(newFavorites))
  }

  return (
    <div className="min-h-screen bg-background spiritual-gradient dark:bg-gray-900">
      <Navigation currentPage="/adeyat-istighfar" />
      
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">أدعية الاستغفار</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            أدعية التوبة والاستغفار من الذنوب والخطايا من القرآن والسنة
          </p>
          <div className="mt-6">
            <Badge className="text-lg px-6 py-2 bg-white/20 text-white animate-pulse-gentle border-white/30">
              {duas.length} دعاء للاستغفار
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {duas.map((dua, index) => (
              <Card 
                key={dua.id} 
                className="overflow-hidden hover-lift animate-fade-in-up border-l-4 border-l-green-500 dark:bg-gray-800 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {dua.id}
                      </div>
                      <div>
                        <Badge className="mb-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          {dua.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground dark:text-gray-400">
                          {dua.reference}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleFavorite(dua.id)}
                        className={`hover-glow transition-all duration-200 ${
                          favorites.includes(dua.id) 
                            ? 'text-red-500 hover:text-red-600' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(dua.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-glow transition-all duration-200 text-gray-400"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span className="hidden sm:inline">استماع</span>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-right">
                      <p className="text-2xl font-arabic leading-loose text-foreground dark:text-gray-100 mb-4">
                        {dua.arabic}
                      </p>
                    </div>

                    <Separator className="dark:bg-gray-600" />

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground dark:text-gray-400 mb-1">النطق:</h4>
                        <p className="text-foreground dark:text-gray-200 italic">{dua.transliteration}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground dark:text-gray-400 mb-1">المعنى:</h4>
                        <p className="text-foreground dark:text-gray-200">{dua.meaning}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => handleComplete(dua.id)}
                          className={`font-bold transition-all duration-300 hover-lift counter-bounce ${
                            completedDuas.includes(dua.id)
                              ? 'bg-green-600 hover:bg-green-700 text-white'
                              : 'bg-primary hover:bg-primary/90 text-white'
                          }`}
                        >
                          {completedDuas.includes(dua.id) ? '✓ تم' : 'استغفار'}
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-gray-400">
                        {dua.count === 1 ? 'مرة واحدة' : dua.count === 100 ? '100 مرة' : `${dua.count} مرات`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Separator className="mb-8 dark:bg-gray-700" />
            <Card className="p-8 hover-lift border-green-200 dark:bg-gray-800 dark:border-green-800">
              <CardContent className="p-0">
                <p className="text-foreground dark:text-gray-100 text-xl font-semibold mb-3 animate-pulse-gentle">
                  "وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا"
                </p>
                <p className="text-muted-foreground dark:text-gray-400">سورة النساء - آية 110</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}