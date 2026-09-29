import { useEffect, useState } from 'react'

export function useGreeting(): string {
  const [greeting, setGreeting] = useState('سلام')

  useEffect(() => {
    try {
      const hour = parseInt(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          hour12: false,
          timeZone: 'Asia/Tehran',
        }).format(new Date()),
        10,
      )
      const g =
        hour >= 5 && hour < 12 ? 'صبح بخیر'
        : hour >= 12 && hour < 14 ? 'ظهر بخیر'
        : hour >= 14 && hour < 19 ? 'عصر بخیر'
        : 'شب بخیر'
      setGreeting(g)
    } catch {
      /* مقدار پیش‌فرض */
    }
  }, [])

  return greeting
}