"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Heart, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function AdeyatAnbiyaPage() {
  const [completedDuas, setCompletedDuas] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const completed = localStorage.getItem("adeyat-anbiya-completed")
    const favs = localStorage.getItem("adeyat-anbiya-favorites")
    if (completed) setCompletedDuas(JSON.parse(completed))
    if (favs) setFavorites(JSON.parse(favs))
  }, [])

  const duas = [
    {
      id: 1,
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      transliteration: "Rabbanā ātinā fī ad-dunyā ḥasanatan wa fī al-ākhirati ḥasanatan wa qinā 'adhāb an-nār",
      translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
      meaning: "اللهم أعطنا في الدنيا خيراً وفي الآخرة خيراً وأحمنا من عذاب النار",
      reference: "البقرة: 201",
      prophet: "دعاء عام من القرآن",
      count: 1,
      category: "دعاء شامل"
    },
    {
      id: 2,
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
      transliteration: "Rabbi ishraḥ lī ṣadrī wa yassir lī amrī wa uḥlul 'uqdatan min lisānī yafqahū qawlī",
      translation: "رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي",
      meaning: "يا رب وسع صدري وسهل أمري وأطلق لساني ليفهم الناس كلامي",
      reference: "طه: 25-28",
      prophet: "دعاء موسى عليه السلام",
      count: 1,
      category: "دعاء التيسير"
    },
    {
      id: 3,
      arabic: "رَبِّ زِدْنِي عِلْماً",
      transliteration: "Rabbi zidnī 'ilman",
      translation: "رب زدني علماً",
      meaning: "يا رب زد من علمي ومعرفتي",
      reference: "طه: 114",
      prophet: "دعاء للعلم",
      count: 1,
      category: "دعاء العلم"
    },
    {
      id: 4,
      arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
      transliteration: "Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā",
      translation: "ربنا لا تؤاخذنا إن نسينا أو أخطأنا",
      meaning: "يا ربنا لا تحاسبنا إذا نسينا أو أخطأنا",
      reference: "البقرة: 286",
      prophet: "دعاء من القرآن",
      count: 1,
      category: "دعاء المغفرة"
    },
    {
      id: 5,
      arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
      transliteration: "Rabbi awzi'nī an ashkura ni'mataka allatī an'amta 'alayya wa 'alā wālidayya wa an a'mala ṣāliḥan tarḍāh",
      translation: "رب أوزعني أن أشكر نعمتك التي أنعمت علي وعلى والدي وأن أعمل صالحاً ترضاه",
      meaning: "يا رب ألهمني أن أشكر نعمتك علي وعلى والدي وأن أعمل عملاً صالحاً ترضى عنه",
      reference: "النمل: 19",
      prophet: "دعاء سليمان عليه السلام",
      count: 1,
      category: "دعاء الشكر"
    },
    {
      id: 6,
      arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِناً وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
      transliteration: "Rabbi ighfir lī wa li wālidayya wa li man dakhala baytiya mu'minan wa lil-mu'minīna wal-mu'mināt",
      translation: "رب اغفر لي ولوالدي ولمن دخل بيتي مؤمناً وللمؤمنين والمؤمنات",
      meaning: "يا رب اغفر لي ولوالدي ولمن دخل بيتي مؤمناً وللمؤمنين والمؤمنات",
      reference: "نوح: 28",
      prophet: "دعاء نوح عليه السلام",
      count: 1,
      category: "دعاء المغفرة"
    },
    {
      id: 7,
      arabic: "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ",
      transliteration: "Rabbi hab lī min ladunka dhurriyyatan ṭayyibatan innaka samī'u ad-du'ā'",
      translation: "رب هب لي من لدنك ذرية طيبة إنك سميع الدعاء",
      meaning: "يا رب ارزقني من عندك ذرية صالحة إنك تسمع الدعاء وتجيبه",
      reference: "آل عمران: 38",
      prophet: "دعاء زكريا عليه السلام",
      count: 1,
      category: "دعاء الذرية"
    },
    {
      id: 8,
      arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
      transliteration: "Rabbanā ighfir lanā dhunūbanā wa isrāfanā fī amrinā wa thabbit aqdāmanā wa unṣurnā 'alā al-qawm al-kāfirīn",
      translation: "ربنا اغفر لنا ذنوبنا وإسرافنا في أمرنا وثبت أقدامنا وانصرنا على القوم الكافرين",
      meaning: "يا ربنا اغفر لنا ذنوبنا وتجاوزنا في أمرنا وثبتنا وانصرنا على الكافرين",
      reference: "آل عمران: 147",
      prophet: "دعاء الأنبياء والمؤمنين",
      count: 1,
      category: "دعاء النصر"
    }
  ]

  const handleComplete = (duaId: number) => {
    const newCompleted = completedDuas.includes(duaId)
      ? completedDuas.filter(id => id !== duaId)
      : [...completedDuas, duaId]
    
    setCompletedDuas(newCompleted)
    localStorage.setItem("adeyat-anbiya-completed", JSON.stringify(newCompleted))
  }

  const handleFavorite = (duaId: number) => {
    const newFavorites = favorites.includes(duaId)
      ? favorites.filter(id => id !== duaId)
      : [...favorites, duaId]
    
    setFavorites(newFavorites)
    localStorage.setItem("adeyat-anbiya-favorites", JSON.stringify(newFavorites))
  }

  return (
    <div className="min-h-screen bg-background spiritual-gradient dark:bg-gray-900">
      <Navigation currentPage="/adeyat-anbiya" />
      
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">أدعية الأنبياء</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            أدعية مباركة من القرآن الكريم دعا بها الأنبياء والمرسلون عليهم السلام
          </p>
          <div className="mt-6">
            <Badge className="text-lg px-6 py-2 bg-white/20 text-white animate-pulse-gentle border-white/30">
              {duas.length} دعاء من القرآن
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
                className="overflow-hidden hover-lift animate-fade-in-up border-l-4 border-l-purple-500 dark:bg-gray-800 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {dua.id}
                      </div>
                      <div>
                        <Badge className="mb-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                          {dua.prophet}
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
                      <Badge className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                        {dua.category}
                      </Badge>
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
            <Card className="p-8 hover-lift border-purple-200 dark:bg-gray-800 dark:border-purple-800">
              <CardContent className="p-0">
                <p className="text-foreground dark:text-gray-100 text-xl font-semibold mb-3 animate-pulse-gentle">
                  "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ"
                </p>
                <p className="text-muted-foreground dark:text-gray-400">سورة غافر - آية 60</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}