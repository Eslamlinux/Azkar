"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, BarChart3, Heart, Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/home", label: "الرئيسية", icon: Home },
    { href: "/statistics", label: "إحصائياتي", icon: BarChart3 },
    { href: "/favorites", label: "المفضلة", icon: Heart },
    { href: "/azkar-sabah", label: "أذكار الصباح" },
    { href: "/azkar-masa", label: "أذكار المساء" },
    { href: "/azkar-nawm", label: "أذكار النوم" },
    { href: "/azkar-wake", label: "أذكار الاستيقاظ" },
    { href: "/azkar-salah", label: "أذكار الصلاة" },
    { href: "/azkar-masjid", label: "أذكار المسجد" },
    { href: "/azkar-wudu", label: "أذكار الوضوء" },
    { href: "/azkar-home-enter", label: "دخول المنزل" },
    { href: "/azkar-home-exit", label: "الخروج من المنزل" },
    { href: "/azkar-toilet-enter", label: "دخول الخلاء" },
    { href: "/azkar-toilet-exit", label: "الخروج من الخلاء" },
    { href: "/azkar-food", label: "أذكار الطعام" },
    { href: "/azkar-travel", label: "أذكار السفر" },
    { href: "/azkar-weather", label: "أذكار الطقس" },
    { href: "/azkar-misc", label: "أذكار متنوعة" },
    { href: "/quran-duas", label: "أدعية القرآن" },
  ]


