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
 const clearAll = () => {
    if (confirm("هل أنت متأكد من حذف جميع المفضلة؟")) {
      localStorage.setItem("favorites", "[]")
      setFavorites([])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation currentPage="favorites" />

      <header className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-10 h-10 fill-white" />
            <h1 className="text-4xl font-bold">أذكاري المفضلة</h1>
          </div>
          <p className="text-pink-100 text-lg">الأذكار التي حفظتها للرجوع إليها</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {favorites.length === 0 ? (
            <Card className="shadow-xl dark:bg-gray-800">
              <CardContent className="p-12 text-center">
                <Heart className="w-20 h-20 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">لا توجد أذكار مفضلة بعد</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  ابدأ بإضافة أذكارك المفضلة من صفحات الأذكار المختلفة
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {favorites.length} ذكر مفضل
                </Badge>
                <Button onClick={clearAll} variant="destructive" className="gap-2">
                  <Trash2 className="w-4 h-4" />
                  حذف الكل
                </Button>
              </div>

