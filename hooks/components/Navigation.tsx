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

  return (
    <nav className="bg-primary dark:bg-gray-900 text-white shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo/Title */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="font-bold text-lg hidden md:block">موقع الأذكار</span>
            </div>
          </Link>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 gap-2 ${currentPage === "/" ? "bg-secondary" : ""}`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">الرئيسية</span>
              </Button>
            </Link>
            <Link href="/statistics">
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 gap-2 ${currentPage === "statistics" ? "bg-secondary" : ""}`}
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">إحصائياتي</span>
              </Button>
            </Link>
            <Link href="/favorites">
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 gap-2 ${currentPage === "favorites" ? "bg-secondary" : ""}`}
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">المفضلة</span>
              </Button>
            </Link>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20 md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-1 pb-2 text-xs">
          {navItems.slice(3).map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 h-8 text-xs w-full hover-lift ${
                  currentPage === item.href ? "bg-secondary" : ""
                }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.slice(3).map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:bg-white/20 w-full justify-start ${
                    currentPage === item.href ? "bg-secondary" : ""
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
