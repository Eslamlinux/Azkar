/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذا السطر هو الأهم: يخبر Next.js بتصدير الموقع كملفات ثابتة
  output: 'export', 
  
  // إزالة basePath للنشر المباشر على GitHub Pages
  // basePath: '/Azkar', 
  
  // (اختياري) تأكد من تعيينه إلى true
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
