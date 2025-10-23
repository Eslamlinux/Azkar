/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذا السطر هو الأهم: يخبر Next.js بتصدير الموقع كملفات ثابتة
  output: 'export', 
  
  // (اختياري) هذا السطر ضروري إذا كنت تنشر على مسار فرعي مثل /Azkar/
  basePath: '/Azkar', 
  
  // (اختياري) تأكد من تعيينه إلى true
  trailingSlash: true,


}

export default nextConfig
