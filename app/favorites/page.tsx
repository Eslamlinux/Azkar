"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Favorite {
  id: string
  text: string
  category: string
  addedAt: string
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(stored)
  }

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((fav) => fav.id !== id)
    localStorage.setItem("favorites", JSON.stringify(updated))
    setFavorites(updated)
  }

