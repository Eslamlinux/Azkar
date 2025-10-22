"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarToiletEnter = [
  {
    id: 1,
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika min al-khubuthi wal-khaba'ith",
    translation: "اللهم إني أعوذ بك من الخبث والخبائث",
    count: 1,
    source: "البخاري ومسلم",
  },
  {
    id: 2,
    arabic: "بِسْمِ اللهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Bismillah, Allahumma inni a'udhu bika min al-khubuthi wal-khaba'ith",
    translation: "بسم الله، اللهم إني أعوذ بك من الخبث والخبائث",
    count: 1,
    source: "أبو داود",
  },
]

export default function AzkarToiletEnterPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarToiletEnter.forEach((zikr) => {
        const saved = localStorage.getItem(`toilet-enter-zikr-${zikr.id}`)
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
