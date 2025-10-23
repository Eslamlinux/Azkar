"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Heart, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function AdeyatRizqPage() {
  const [completedDuas, setCompletedDuas] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const completed = localStorage.getItem("adeyat-rizq-completed")
    const favs = localStorage.getItem("adeyat-rizq-favorites")
    if (completed) setCompletedDuas(JSON.parse(completed))
    if (favs) setFavorites(JSON.parse(favs))
  }, [])

  const duas = [
    {
      id: 1,
      arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      transliteration: "Allahumma ikfini bi halalika 'an haramik, wa aghnini bi fadlika 'amman siwak",
      translation: "اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك",
      meaning: "اللهم اجعل الحلال يكفيني عن الحرام، وأغنني بفضلك عن الحاجة لغيرك",
      reference: "سنن الترمذي",
      count: 3,
      category: "طلب الرزق الحلال"
    },
    {
      id: 2,
      arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ",
      transliteration: "Allahumma barik lana fima razaqtana, wa qina 'adhab an-nar",
      translation: "اللهم بارك لنا فيما رزقتنا وقنا عذاب النار",
      meaning: "اللهم بارك لنا في الرزق الذي أعطيتنا وأحمنا من عذاب النار",
      reference: "سنن أبي داود",
      count: 1,
      category: "البركة في الرزق"
    },
    {
      id: 3,
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ، فَإِنَّهُ لَا يَمْلِكُهَا إِلَّا أَنْتَ",
      transliteration: "Allahumma inni as'aluka min fadlika wa rahmatik, fa innahu la yamlikuha illa ant",
      translation: "اللهم إني أسألك من فضلك ورحمتك فإنه لا يملكها إلا أنت",
      meaning: "اللهم إني أطلب من فضلك ورحمتك، فإنه لا يملك ذلك إلا أنت",
      reference: "صحيح الترغيب",
      count: 3,
      category: "طلب الفضل"
    },
    {
      id: 4,
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      transliteration: "Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhab an-nar",
      translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
      meaning: "يا ربنا أعطنا في الدنيا خيراً وفي الآخرة خيراً وأحمنا من عذاب النار",
      reference: "البقرة: 201",
      count: 3,
      category: "دعاء شامل"
    },
    {
      id: 5,
      arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي",
      transliteration: "Allahumma aslih li dini alladhi huwa 'ismatu amri, wa aslih li dunyaya allati fiha ma'ashi",
      translation: "اللهم أصلح لي ديني الذي هو عصمة أمري وأصلح لي دنياي التي فيها معاشي",
      meaning: "اللهم أصلح لي ديني الذي هو حماية أمري، وأصلح لي دنياي التي فيها رزقي",
      reference: "صحيح مسلم",
      count: 1,
      category: "إصلاح الدين والدنيا"
    },
    {
      id: 6,
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
      transliteration: "Allahumma inni as'aluka al-huda wa't-tuqa wa'l-'afafa wa'l-ghina",
      translation: "اللهم إني أسألك الهدى والتقى والعفاف والغنى",
      meaning: "اللهم إني أطلب منك الهداية والتقوى والعفة والغنى عن الناس",
      reference: "صحيح مسلم",
      count: 3,
      category: "طلب الغنى"
    },
    {
      id: 7,
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
      transliteration: "Allahumma inni a'udhu bika min al-hammi wa'l-hazan, wa a'udhu bika min al-'ajzi wa'l-kasal, wa a'udhu bika min al-jubni wa'l-bukhl, wa a'udhu bika min ghalabat ad-dayni wa qahr ar-rijal",
      translation: "اللهم إني أعوذ بك من الهم والحزن وأعوذ بك من العجز والكسل وأعوذ بك من الجبن والبخل وأعوذ بك من غلبة الدين وقهر الرجال",
      meaning: "اللهم إني ألجأ إليك من الهم والحزن، ومن العجز والكسل، ومن الجبن والبخل، ومن كثرة الديون وظلم الناس",
      reference: "صحيح البخاري",
      count: 3,
      category: "الاستعاذة من الدين"
    },
    {
      id: 8,
      arabic: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ",
      transliteration: "Allahumma rabb as-samawati wa rabb al-ardi wa rabb al-'arsh al-'azim, rabbana wa rabba kulli shay', faliqa al-habbi wa'n-nawa, wa munzil at-tawrati wa'l-injili wa'l-furqan, a'udhu bika min sharri kulli shay'in anta akhidhun bi nasiyatih",
      translation: "اللهم رب السماوات ورب الأرض ورب العرش العظيم ربنا ورب كل شيء فالق الحب والنوى ومنزل التوراة والإنجيل والفرقان أعوذ بك من شر كل شيء أنت آخذ بناصيته",
      meaning: "اللهم يا رب السماوات والأرض والعرش العظيم، ربنا ورب كل شيء، يا من يشق الحبة والنواة، ويا من أنزل التوراة والإنجيل والقرآن، أعوذ بك من شر كل شيء تملك السيطرة عليه",
      reference: "صحيح مسلم",
      count: 1,
      category: "دعاء شامل"
    }
  ]

  const handleComplete = (duaId: number) => {
    const newCompleted = completedDuas.includes(duaId)
      ? completedDuas.filter(id => id !== duaId)
      : [...completedDuas, duaId]
    
    setCompletedDuas(newCompleted)
    localStorage.setItem("adeyat-rizq-completed", JSON.stringify(newCompleted))
  }

  const handleFavorite = (duaId: number) => {
    const newFavorites = favorites.includes(duaId)
      ? favorites.filter(id => id !== duaId)
      : [...favorites, duaId]
    
    setFavorites(newFavorites)
    localStorage.setItem("adeyat-rizq-favorites", JSON.stringify(newFavorites))
  }

  return (
    <div className="min-h-screen bg-background spiritual-gradient dark:bg-gray-900">
      <Navigation currentPage="/adeyat-rizq" />
      
      <header className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">أدعية الرزق والمال</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            أدعية طلب الرزق الحلال والبركة في المال من القرآن والسنة النبوية
          </p>
          <div className="mt-6">
            <Badge className="text-lg px-6 py-2 bg-white/20 text-white animate-pulse-gentle border-white/30">
              {duas.length} دعاء للرزق
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
                className="overflow-hidden hover-lift animate-fade-in-up border-l-4 border-l-amber-500 dark:bg-gray-800 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {dua.id}
                      </div>
                      <div>
                        <Badge className="mb-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
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
                          {completedDuas.includes(dua.id) ? '✓ تم' : 'دعاء'}
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-gray-400">
                        {dua.count === 1 ? 'مرة واحدة' : `${dua.count} مرات`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Separator className="mb-8 dark:bg-gray-700" />
            <Card className="p-8 hover-lift border-amber-200 dark:bg-gray-800 dark:border-amber-800">
              <CardContent className="p-0">
                <p className="text-foreground dark:text-gray-100 text-xl font-semibold mb-3 animate-pulse-gentle">
                  "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
                </p>
                <p className="text-muted-foreground dark:text-gray-400">سورة الطلاق - آية 2-3</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}