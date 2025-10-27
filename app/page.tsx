"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Statistics from "@/components/Statistics"
import Link from "next/link"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [completedToday, setCompletedToday] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)

  useEffect(() => {
    let total = 0
    const pages = [
      "azkar-sabah",
      "azkar-masa",
      "azkar-nawm",
      "azkar-salah",
      "azkar-wudu",
      "azkar-masjid",
      "azkar-food",
      "azkar-travel",
      "azkar-wake",
    ]

    pages.forEach((page) => {
      const completed = localStorage.getItem(`${page}-completed`)
      if (completed) {
        total += JSON.parse(completed).length
      }
    })

    setCompletedToday(total)

    const streak = localStorage.getItem("current-streak")
    setCurrentStreak(streak ? Number.parseInt(streak) : 0)
  }, [])

  const azkarSections = [
    {
      title: "أذكار الصباح",
      description: "أذكار وأدعية الصباح المستجابة",
      href: "/azkar-sabah",
      count: "33 ذكر",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "أذكار المساء",
      description: "أذكار وأدعية المساء المباركة",
      href: "/azkar-masa",
      count: "35 ذكر",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      title: "أذكار النوم",
      description: "أذكار ما قبل النوم والراحة",
      href: "/azkar-nawm",
      count: "7 أذكار",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      title: "أذكار الصلاة",
      description: "أذكار ما بعد الصلاة",
      href: "/azkar-salah",
      count: "8 أذكار",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      title: "أذكار المسجد",
      description: "أذكار دخول والخروج من المسجد",
      href: "/azkar-masjid",
      count: "4 أذكار",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "أذكار الوضوء",
      description: "أذكار الوضوء والطهارة",
      href: "/azkar-wudu",
      count: "3 أذكار",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      title: "أذكار الطعام",
      description: "أذكار قبل وبعد الطعام",
      href: "/azkar-food",
      count: "5 أذكار",
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
    {
      title: "أذكار السفر",
      description: "أذكار السفر والرحلات",
      href: "/azkar-travel",
      count: "5 أذكار",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
    {
      title: "أذكار الاستيقاظ",
      description: "أذكار الاستيقاظ من النوم",
      href: "/azkar-wake",
      count: "6 أذكار",
      color: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
    {
      title: "أذكار دخول المنزل",
      description: "أذكار دخول المنزل",
      href: "/azkar-home-enter",
      count: "2 ذكر",
      color: "bg-gradient-to-br from-teal-500 to-cyan-600",
    },
    {
      title: "أذكار الخروج من المنزل",
      description: "أذكار الخروج من المنزل",
      href: "/azkar-home-exit",
      count: "2 ذكر",
      color: "bg-gradient-to-br from-lime-500 to-green-600",
    },
    {
      title: "أذكار دخول الخلاء",
      description: "أذكار دخول الخلاء",
      href: "/azkar-toilet-enter",
      count: "1 ذكر",
      color: "bg-gradient-to-br from-sky-500 to-blue-600",
    },
    {
      title: "أذكار الخروج من الخلاء",
      description: "أذكار الخروج من الخلاء",
      href: "/azkar-toilet-exit",
      count: "1 ذكر",
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    },
    {
      title: "أذكار الطقس",
      description: "أذكار المطر والرعد والبرق",
      href: "/azkar-weather",
      count: "3 أذكار",
      color: "bg-gradient-to-br from-gray-500 to-slate-600",
    },
    {
      title: "أذكار متنوعة",
      description: "أذكار متنوعة للتسبيح والاستغفار",
      href: "/azkar-misc",
      count: "7 أذكار",
      color: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    },
    {
      title: "أدعية من القرآن",
      description: "أدعية مباركة من كتاب الله",
      href: "/quran-duas",
      count: "8 أدعية",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "أدعية الأنبياء",
      description: "أدعية الأنبياء والمرسلين من القرآن",
      href: "/adeyat-anbiya",
      count: "8 أدعية",
      color: "bg-gradient-to-br from-purple-600 to-indigo-700",
    },
    {
      title: "أدعية الاستغفار",
      description: "أدعية التوبة والاستغفار من الذنوب",
      href: "/adeyat-istighfar",
      count: "8 أدعية",
      color: "bg-gradient-to-br from-green-600 to-emerald-700",
    },
    {
      title: "أدعية الرزق والمال",
      description: "أدعية طلب الرزق الحلال والبركة",
      href: "/adeyat-rizq",
      count: "8 أدعية",
      color: "bg-gradient-to-br from-amber-600 to-yellow-700",
    },
  ]

  return (
    <div className="min-h-screen bg-background spiritual-gradient">
      <Navigation currentPage="/" />

      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">موقع الأذكار الإسلامية</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            مجموعة شاملة من الأذكار والأدعية الإسلامية المأثورة من القرآن الكريم والسنة النبوية الشريفة
          </p>
          <div className="mt-8">
            <Badge className="text-lg px-6 py-2 bg-white/20 text-white animate-pulse-gentle border-white/30">
              أكثر من 150 ذكر ودعاء
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Statistics totalAzkar={90} completedToday={completedToday} currentStreak={currentStreak} />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">اختر قسم الأذكار</h2>
            <p className="text-muted-foreground text-lg">
              اختر من الأقسام التالية لتبدأ رحلتك الروحانية مع الأذكار والأدعية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {azkarSections.map((section, index) => (
              <Link key={section.href} href={section.href}>
                <Card
                  className="overflow-hidden hover-lift animate-fade-in-up transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-32 ${section.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        <Badge className="bg-white/20 text-white border-white/30">{section.count}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                      {section.description}
                    </p>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">ابدأ الأذكار</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 hover-lift border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">فضل الذكر</h3>
                <p className="text-foreground text-lg font-medium mb-4 animate-pulse-gentle">
                  "وَاذْكُرُوا اللَّهَ كَثِيرًا لَعَلَّكُمْ تُفْلِحُونَ"
                </p>
                <p className="text-muted-foreground">سورة الأنفال - آية 45</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <div className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">طمأنينة القلب</div>
                    <div className="text-muted-foreground">الذكر يجلب السكينة والراحة النفسية</div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="font-semibold text-amber-700 dark:text-amber-300 mb-2">محو الذنوب</div>
                    <div className="text-muted-foreground">الأذكار تمحو السيئات وترفع الدرجات</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">الحفظ والحماية</div>
                    <div className="text-muted-foreground">الأذكار حصن من الشيطان والمكاره</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
