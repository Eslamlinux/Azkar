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

const azkarSalah: Zikr[] = [
  {
    id: 1,
    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    count: 3,
    source: "أبو داود والترمذي",
  },
  {
    id: 2,
    arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",
    count: 1,
    source: "مسلم",
  },
  {
    id: 3,
    arabic:
      "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ وَلاَ مُعْطِيَ لِمَا مَنَعْتَ وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    count: 1,
    source: "البخاري ومسلم",
  },
  {
    id: 4,
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 10,
    source: "مسلم",
  },
  {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ",
    count: 33,
    source: "البخاري ومسلم",
  },
  {
    id: 6,
    arabic: "الْحَمْدُ لِلَّهِ",
    count: 33,
    source: "البخاري ومسلم",
  },
  {
    id: 7,
    arabic: "اللَّهُ أَكْبَرُ",
    count: 34,
    source: "البخاري ومسلم",
  },
  {
    id: 8,
    arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 1,
    source: "مسلم",
  },
]

