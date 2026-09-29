import { useEffect, useState } from 'react'

export function useClock(): string {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('fa-IR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Tehran',
          }).format(new Date()),
        )
      } catch {
        /* مرورگر پشتیبانی نکرد */
      }
    }
    tick()
    const id = window.setInterval(tick, 30_000)
    return () => window.clearInterval(id)
  }, [])

  return time
}