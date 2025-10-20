"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"

interface ZikrItem {
  id: number
  arabic: string
  count: number
  source: string
}

const wakeAzkar: ZikrItem[] = [
  {
    id: 1,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ",
    count: 1,
    source: "الترمذي",
  },
  {
    id: 3,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    count: 1,
    source: "البخاري",
  },
  {
    id: 4,
    arabic: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    count: 1,
    source: "أبو داود",
  },
  {
    id: 5,
    arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ، وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
    count: 1,
    source: "أبو داود والترمذي",
  },
  {
    id: 6,
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    count: 1,
    source: "الترمذي",
  },
]

