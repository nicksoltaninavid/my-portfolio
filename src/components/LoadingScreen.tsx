import { PROFILE } from '../data/profile'
import { cx } from '../utils'

interface LoadingScreenProps {
  progress: number
  fading: boolean
}

export function LoadingScreen({ progress, fading }: LoadingScreenProps) {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری"
      className={cx(
        'fixed inset-0 z-[100] grid place-items-center bg-cream transition-opacity duration-[400ms]',
        fading && 'pointer-events-none opacity-0',
      )}
    >
      <div className="text-center">
        <p className="anim-rise font-display text-[2rem] font-semibold leading-tight text-ink">
          {PROFILE.name}
        </p>
        <p className="anim-rise mt-0.5 text-[13px] text-mute" style={{ animationDelay: '.1s' }}>
          {PROFILE.role}
        </p>
        <div className="mx-auto mt-[18px] h-0.5 w-[200px] overflow-hidden rounded bg-line">
          <div
            className="h-full bg-terra transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}