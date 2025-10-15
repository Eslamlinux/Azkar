"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FavoriteButtonProps {
  zikrId: string
  zikrText: string
  zikrCategory: string
}

export default function FavoriteButton({ zikrId, zikrText, zikrCategory }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorite(favorites.some((fav: any) => fav.id === zikrId))
  }, [zikrId])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

    if (isFavorite) {
      const updated = favorites.filter((fav: any) => fav.id !== zikrId)
      localStorage.setItem("favorites", JSON.stringify(updated))
      setIsFavorite(false)
    } else {
      favorites.push({
        id: zikrId,
        text: zikrText,
        category: zikrCategory,
        addedAt: new Date().toISOString(),
      })
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(true)
    }
  }
