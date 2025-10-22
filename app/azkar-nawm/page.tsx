"use client"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SharedZikrCard from "@/components/SharedZikrCard"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const azkarNawmData = [
  {
    id: 1,
    arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    count: 1,
    source: "رواه البخاري",
  },
  {
    id: 2,
    arabic:
      "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    count: 1,
    source: "رواه مسلم",
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    count: 3,
    source: "رواه أبو داود",
  },
  {
    id: 4,
    arabic: "بِاسْمِ اللَّهِ أَمُوتُ وَأَحْيَا",
    count: 1,
    source: "رواه البخاري",
  },
  {
    id: 5,
    arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
    count: 33,
    source: "رواه مسلم",
  },
   {
    id: 6,
    arabic:
      "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
    count: 1,
    source: "رواه البخاري ومسلم",
  },
  {
    id: 7,
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ",
    count: 1,
    source: "رواه مسلم",
  },
]

export default function AzkarNawmPage() {
  const [totalProgress, setTotalProgress] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      let completed = 0
      azkarNawmData.forEach((zikr) => {
        if (localStorage.getItem(`zikr_nawm_${zikr.id}_completed`)) {
          completed++
        }
      })
      setCompletedCount(completed)
      setTotalProgress(Math.round((completed / azkarNawmData.length) * 100))
    }

    updateProgress()
    const interval = setInterval(updateProgress, 500)
    return () => clearInterval(interval)
  }, [])


