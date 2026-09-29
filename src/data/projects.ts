export interface Project {
  id: string
  idx: string
  title: string
  year: string
  description: string
  tech: string[]
  github: string
  demo: string
}

export const PROJECTS: Project[] = [
  {
    id: 'liora',
    idx: '۰۱',
    title: 'لیورا — فروشگاه آنلاین مراقبت پوست',
    year: '2025',
    description:
      'رابط فروشگاهی مدرن با تمرکز روی طراحی واکنش‌گرا، کامپوننت‌های قابل استفاده مجدد، معرفی درست محصول و تجربه خرید تمیز.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/nicksoltaninavid/liora-',
    demo: 'https://liora-pearl.vercel.app/',
  },
  {
    id: 'persian-calendar',
    idx: '۰۲',
    title: 'تقویم شمسی',
    year: '2025',
    description:
      'اپلیکیشن تقویم جلالی با انتخاب تاریخ تکی و بازه، یادداشت‌گذاری برای روزها، ویرایش و حذف یادداشت‌ها و رابطی تعاملی.',
    tech: ['React', 'react-multi-date-picker', 'Tailwind CSS'],
    github: 'https://github.com/nicksoltaninavid/persian-calendar',
    demo: 'https://persian-calendar-neon.vercel.app/',
  },
  {
    id: 'plant-store',
    idx: '۰۳',
    title: 'فروشگاه گیاه',
    year: '2024',
    description:
      'فروشگاه واکنش‌گرا با کامپوننت‌های قابل استفاده مجدد React، اسلایدر، ناوبری موبایل‌پسند و چیدمان‌های ریسپانسیو.',
    tech: ['React', 'Vite', 'Bootstrap', 'Swiper'],
    github: 'https://github.com/nicksoltaninavid/plant-store-react',
    demo: 'https://plant-store-react.vercel.app/',
  },
]