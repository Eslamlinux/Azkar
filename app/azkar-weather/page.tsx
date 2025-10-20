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
