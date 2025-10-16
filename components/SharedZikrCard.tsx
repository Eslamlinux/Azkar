"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Volume2, VolumeX, RotateCcw } from "lucide-react"
import FavoriteButton from "./FavoriteButton"

interface Zikr {
  id: number
  arabic: string
  count: number
  source: string
}

interface SharedZikrCardProps {
  zikr: Zikr
  index: number
  category: string
  storageKey: string
}

export default function SharedZikrCard({ zikr, index, category, storageKey }: SharedZikrCardProps) {
  const [currentCount, setCurrentCount] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleIncrement = () => {
    if (currentCount < zikr.count) {
      const newCount = currentCount + 1
      setCurrentCount(newCount)

      if (newCount === zikr.count) {
        setIsCompleted(true)
        localStorage.setItem(`${storageKey}_${zikr.id}_completed`, "true")

        // Update completed list
        const completed = JSON.parse(localStorage.getItem(`${storageKey}-completed`) || "[]")
        if (!completed.includes(zikr.id)) {
          completed.push(zikr.id)
          localStorage.setItem(`${storageKey}-completed`, JSON.stringify(completed))
        }
      }
    }
  }
