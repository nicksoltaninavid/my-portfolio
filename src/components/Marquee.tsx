import { TECH_MARQUEE } from '../data/skills'

export function Marquee() {
  const content = TECH_MARQUEE.join('\u00A0✦\u00A0') + '\u00A0✦\u00A0'

  return (
    <div className="marquee -mx-6 overflow-hidden border-b border-line py-2" aria-hidden="true">
      <div dir="ltr" className="marquee-track flex w-max">
        <span className="whitespace-nowrap font-mono text-[11.5px] tracking-[0.18em] text-mute">
          {content}
        </span>
        <span className="whitespace-nowrap font-mono text-[11.5px] tracking-[0.18em] text-mute">
          {content}
        </span>
      </div>
    </div>
  )
}