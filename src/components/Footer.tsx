

import { PROFILE } from '../data/profile'

function JalaliYear(): string {
  try {
    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date())
  } catch {
    return '۱۴۰۴'
  }
}

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-2.5 border-t border-line py-6 pb-11 text-[13px] text-mute max-md:justify-center max-md:text-center">
      <span>
        © <JalaliYear /> — {PROFILE.name}
      </span>
      <span>ساخته‌شده با React + TypeScript + Tailwind ✦</span>
      <button
        type="button"
        onClick={toTop}
        aria-label="بازگشت به بالا"
        className="h-10 w-10 rounded-full border border-line2 bg-surface text-mute transition-all hover:-translate-y-0.5 hover:border-terra hover:text-terra"
      >
        ↑
      </button>
    </footer>
  )
}