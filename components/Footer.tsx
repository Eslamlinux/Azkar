"use client"

/**
 * مكون Footer الموحد للموقع
 * يعرض معلومات الموقع والأقسام الرئيسية والميزات
 * مع رابط الموقع الشخصي للمطور
 */
 
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* معلومات الموقع */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">موقع الأذكار</h3>
            <p className="text-emerald-100 leading-relaxed">
              موقع شامل لجميع الأذكار والأدعية من القرآن والسنة النبوية الشريفة
            </p>
          </div>

          {/* الأقسام الرئيسية */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">الأقسام الرئيسية</h3>
            <div className="space-y-2 text-emerald-100">
              <div>أذكار الصباح والمساء</div>
              <div>أذكار الصلاة والوضوء</div>
              <div>أذكار النوم والاستيقاظ</div>
              <div>أدعية من القرآن الكريم</div>
            </div>
          </div>

          {/* معلومات إضافية */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">ميزات الموقع</h3>
            <div className="space-y-2 text-emerald-100">
              <div>✓ عدادات تفاعلية للأذكار</div>
              <div>✓ حفظ التقدم تلقائياً</div>
              <div>✓ تصميم متجاوب لجميع الأجهزة</div>
              <div>✓ سهولة في الاستخدام</div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500 mt-8 pt-6 text-center">
          <p className="text-emerald-100">Eslam Linux © 2025 موقع الأذكار - جميع الحقوق محفوظة</p>
          <p className="text-emerald-200 text-sm mt-2">"وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ"</p>
          
                   <div className="mt-4 pt-4 border-t border-emerald-500/50">
            <p className="text-emerald-200 text-sm">
              تطوير: 
              <a 
                href="https://eslamlinux.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-100 underline ml-1 transition-colors duration-200"
              >
                Eslam Linux
              </a>
            </p>
 	</div>
        </div>
      </div>
    </footer>
  )
}
