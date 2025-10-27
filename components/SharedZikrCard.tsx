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
 isCompleted?: boolean
  onComplete?: () => void
   animationDelay?: number
   storageKey: string 
}

export default function SharedZikrCard({ 
zikr, 
  isCompleted = false, 
  onComplete, 
  animationDelay = 0 ,
  storageKey 
}: SharedZikrCardProps) {

    const [currentCount, setCurrentCount] = useState(0)
  const [completed, setCompleted] = useState(isCompleted)
    const [isPlaying, setIsPlaying] = useState(false)


  // تحديث حالة الإكمال عند تغيير الخاصية
  useEffect(() => {
    setCompleted(isCompleted)
  }, [isCompleted])

  const handleIncrement = () => {
    if (currentCount < zikr.count) {
      const newCount = currentCount + 1
      setCurrentCount(newCount)

      if (newCount === zikr.count) {
 
             setCompleted(true)
        if (onComplete) {
          onComplete()
                   }
      }
    }
  }

  const handleReset = () => {
    setCurrentCount(0)
    
     setCompleted(false)
    if (onComplete && isCompleted) {
      onComplete() // Toggle off completion
    }
      }

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Placeholder for actual audio playback logic
      setTimeout(() => setIsPlaying(false), 3000)
    }
  }

 
  return (
    <Card
      className={`overflow-hidden hover-lift animate-fade-in-up transition-all duration-500 dark:bg-gray-800 ${
        completed ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700" : "bg-card"
            }`}
      style={{ animationDelay: `${animationDelay}s` }}
        >
      <CardContent className="p-0">
        <div className="flex">
          <div className="flex-shrink-0 w-24 bg-primary dark:bg-emerald-700 flex flex-col items-center justify-center relative">
            <div className="text-white font-bold text-xl mb-1">{String(zikr.id).padStart(2, "0")}</div>
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
                <FavoriteButton zikrId={`zikr_${zikr.id}`} zikrText={zikr.arabic} zikrCategory="azkar" />

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

            {/* تم التعديل هنا: 
                1. زيادة حجم النص باستخدام Tailwind (من text-lg إلى text-2xl).
                2. تحديث خاصية style بقائمة خطوط أوسع لدعم رموز المصحف (Uthmani). 
            */}
            <p 
                className="text-foreground dark:text-gray-100 leading-relaxed text-2xl font-medium text-right mb-6 hover:text-primary dark:hover:text-emerald-400 transition-colors duration-300"
                style={{ fontFamily: "'Amiri', 'Scheherazade New', 'Noto Naskh Arabic', 'Traditional Arabic', 'Simplified Arabic', Tahoma, Arial, sans-serif" }} 
                dangerouslySetInnerHTML={{ __html: zikr.arabic }}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleIncrement}
                  disabled={completed}
                  className={`px-6 py-2 font-bold transition-all duration-300 ${
                    completed
                      ? "bg-emerald-500 text-white cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90 text-white hover-lift counter-bounce"
                  }`}
                >
                  {completed ? "مكتمل" : "تسبيح"}
                </Button>

                {(currentCount > 0 || completed) && (
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="sm"
                    className="text-xs hover-lift bg-transparent gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    إعادة تعيين
                  </Button>
                )}
              </div>

              <div className="text-sm text-muted-foreground dark:text-gray-400">
                {currentCount > 0 && (
                  <span className="animate-slide-in-right">
                    التقدم: {Math.round((currentCount / zikr.count) * 100)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
