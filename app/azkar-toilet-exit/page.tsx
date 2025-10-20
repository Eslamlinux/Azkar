"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

const azkarToiletExit = [
  {
    id: 1,
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    translation: "أستغفرك يا الله",
    count: 1,
    source: "أبو داود والترمذي",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي",
    transliteration: "Alhamdu lillahi alladhi adhhaba anni al-adha wa 'afani",
    translation: "الحمد لله الذي أذهب عني الأذى وعافاني",
    count: 1,
    source: "ابن ماجه",
  },
]

export default function AzkarToiletExitPage() {
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateCompletedCount = () => {
      let completed = 0
      azkarToiletExit.forEach((zikr) => {
        const saved = localStorage.getItem(`toilet-exit-zikr-${zikr.id}`)
        if (saved && Number.parseInt(saved) >= zikr.count) {
          completed++
        }
      })
      setCompletedCount(completed)
    }

