"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarData = [
  {
    id: 1,
    text: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 2,
    text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 3,
    text: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    count: 1,
    source: "مسلم",
  },
]

export default function AzkarHomeExitPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarData.forEach((zikr) => {
        const saved = localStorage.getItem(`azkar-home-exit-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
    }

