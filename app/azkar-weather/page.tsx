"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const weatherAzkar = [
  {
    id: 1,
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ هَذِهِ الرِّيحِ وَخَيْرِ مَا فِيهَا وَخَيْرِ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ الرِّيحِ وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ",
    transliteration:
      "Allahumma inni as'aluka min khayri hadhihi ar-rih wa khayri ma fiha wa khayri ma ursilat bihi, wa a'udhu bika min sharri hadhihi ar-rih wa sharri ma fiha wa sharri ma ursilat bihi",
    translation:
      "اللهم إني أسألك من خير هذه الريح وخير ما فيها وخير ما أرسلت به، وأعوذ بك من شر هذه الريح وشر ما فيها وشر ما أرسلت به",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ اسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا نَافِعًا غَيْرَ ضَارٍّ عَاجِلًا غَيْرَ آجِلٍ",
    transliteration: "Allahumma asqina ghaythan mughithan mari'an mari'an nafi'an ghayra darrin 'ajilan ghayra ajil",
    translation: "اللهم اسقنا غيثاً مغيثاً مريئاً مريعاً نافعاً غير ضار عاجلاً غير آجل",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 3,
    arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
    transliteration: "Mutirnā bi fadli Allāhi wa rahmatihi",
    translation: "مطرنا بفضل الله ورحمته",
    count: 1,
    source: "البخاري",
  },
  {
    id: 4,
    arabic: "اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ وَبُطُونِ الأَوْدِيَةِ وَمَنَابِتِ الشَّجَرِ",
    transliteration:
      "Allahumma hawalayna wa la 'alayna, Allahumma 'ala al-akam wa az-zirab wa butun al-awdiya wa manabiti ash-shajar",
    translation: "اللهم حوالينا ولا علينا، اللهم على الآكام والظراب وبطون الأودية ومنابت الشجر",
    count: 1,
    source: "البخاري",
  },
  {
    id: 5,
    arabic: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    transliteration: "Subhan alladhi yusabbihu ar-ra'du bi hamdihi wa al-mala'ikatu min khifatihi",
    translation: "سبحان الذي يسبح الرعد بحمده والملائكة من خيفته",
    count: 1,
    source: "الترمذي",
  },
]


export default function AzkarWeatherPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      weatherAzkar.forEach((zikr) => {
        const saved = localStorage.getItem(`weather-zikr-${zikr.id}`)
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

  const overallProgress = (completedCount / weatherAzkar.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

