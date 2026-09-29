import { PROFILE } from '../data/profile'
import { useClock } from '../hooks/useClock'

export function Header() {
  const time = useClock()

  return (
    <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2.5 pt-8">
      <div>
        <p className="text-[1.05rem] font-bold text-ink">{PROFILE.name}</p>
        <p className="text-[13px] text-mute">{PROFILE.role}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-[12.5px] text-mute">
          تهران · <span>{time}</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-line2 bg-surface px-3 py-1 text-[12.5px] font-medium text-ink">
          <i className="dot-pulse h-[7px] w-[7px] rounded-full bg-terra" aria-hidden="true" />
          آماده همکاری
        </span>
      </div>
    </header>
  )
}