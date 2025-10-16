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

  const handleReset = () => {
    setCurrentCount(0)
    setIsCompleted(false)
    localStorage.removeItem(`${storageKey}_${zikr.id}_completed`)

    // Update completed list
    const completed = JSON.parse(localStorage.getItem(`${storageKey}-completed`) || "[]")
    const updated = completed.filter((id: number) => id !== zikr.id)
    localStorage.setItem(`${storageKey}-completed`, JSON.stringify(updated))
  }

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000)
    }
  }

  useEffect(() => {
    const completed = localStorage.getItem(`${storageKey}_${zikr.id}_completed`)
    if (completed) {
      setIsCompleted(true)
      setCurrentCount(zikr.count)
    }
  }, [zikr.id, zikr.count, storageKey])
  

  return (
    <Card
      className={`overflow-hidden hover-lift animate-fade-in-up transition-all duration-500 dark:bg-gray-800 ${
        isCompleted ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700" : "bg-card"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-0">
        <div className="flex">
          <div className="flex-shrink-0 w-24 bg-primary dark:bg-emerald-700 flex flex-col items-center justify-center relative">
            <div className="text-white font-bold text-xl mb-1">{String(index + 1).padStart(2, "0")}</div>
            <div className="relative w-8 h-8">
              <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${(currentCount / zikr.count) * 87.96} 87.96`}
                  className="progress-ring transition-all duration-300"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {currentCount}/{zikr.count}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600"
                >
                  {zikr.source}
                </Badge>
                {isCompleted && <Badge className="text-xs bg-emerald-500 text-white animate-pulse-gentle">مكتمل</Badge>}
              </div>

              <div className="flex items-center gap-2">
                <FavoriteButton zikrId={`${storageKey}_${zikr.id}`} zikrText={zikr.arabic} zikrCategory={category} />

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePlayAudio}
                  className={`text-xs hover-glow gap-1 ${isPlaying ? "bg-primary text-white" : ""}`}
                >
                  {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isPlaying ? "إيقاف" : "استماع"}</span>
                </Button>

                <Badge
                  variant="secondary"
                  className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                >
                  {zikr.count === 1 ? "مرة واحدة" : `${zikr.count} مرات`}
                </Badge>
              </div>
            </div>
