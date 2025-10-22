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

const azkarFood: Zikr[] = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 4,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 5,
    arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي",
    count: 1,
    source: "مسلم",
  },
]

