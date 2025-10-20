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


