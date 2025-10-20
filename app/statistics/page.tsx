"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PageStats {
  name: string
  displayName: string
  total: number
  completed: number
  percentage: number
}

export default function StatisticsPage() {
  const [stats, setStats] = useState<PageStats[]>([])
  const [totalCompleted, setTotalCompleted] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    const pages = [
      { name: "azkar-sabah", displayName: "أذكار الصباح", total: 15 },
      { name: "azkar-masa", displayName: "أذكار المساء", total: 25 },
      { name: "azkar-nawm", displayName: "أذكار النوم", total: 10 },
      { name: "azkar-salah", displayName: "أذكار الصلاة", total: 8 },
      { name: "azkar-wudu", displayName: "أذكار الوضوء", total: 5 },
      { name: "azkar-masjid", displayName: "أذكار المسجد", total: 6 },
      { name: "azkar-food", displayName: "أذكار الطعام", total: 8 },
      { name: "azkar-travel", displayName: "أذكار السفر", total: 7 },
      { name: "azkar-wake", displayName: "أذكار الاستيقاظ", total: 6 },
    ]

