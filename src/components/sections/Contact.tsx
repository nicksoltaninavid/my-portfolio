import { useState } from 'react'
import { GITHUB_LABEL, LINKEDIN_LABEL, PROFILE } from '../../data/profile'
import { cx } from '../../utils'
import { Reveal } from '../Reveal'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cx(
        'ms-auto shrink-0 rounded-lg border px-3 py-1 text-xs font-medium transition-colors',
        copied
          ? 'border-terra bg-terra text-white'
          : 'border-line2 text-mute hover:border-terra hover:text-terra',
      )}
    >
      {copied ? 'کپی شد ✓' : 'کپی'}
    </button>
  )
}

export function Contact() {
  return (
    <>
      <Reveal>
        <div className="flex items-center gap-4 border-b border-line px-1.5 py-4 transition-colors hover:bg-surface">
          <span className="w-16 shrink-0 text-[13px] text-mute sm:w-20">ایمیل</span>
          <a
            href={`mailto:${PROFILE.email}`}
            dir="ltr"
            className="break-all font-mono text-sm text-terra underline-offset-4 hover:underline"
          >
            {PROFILE.email}
          </a>
          <CopyButton text={PROFILE.email} />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 border-b border-line px-1.5 py-4 transition-all hover:bg-surface hover:px-3"
        >
          <span className="w-16 shrink-0 text-[13px] text-mute sm:w-20">گیت‌هاب</span>
          <span dir="ltr" className="break-all font-mono text-sm text-terra">
            {GITHUB_LABEL}
          </span>
          <span className="ms-auto text-line2 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-terra">
            ←
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.16}>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 border-b border-line px-1.5 py-4 transition-all hover:bg-surface hover:px-3"
        >
          <span className="w-16 shrink-0 text-[13px] text-mute sm:w-20">لینکدین</span>
          <span dir="ltr" className="break-all font-mono text-sm text-terra">
            {LINKEDIN_LABEL}
          </span>
          <span className="ms-auto text-line2 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-terra">
            ←
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.24}>
        <p className="mt-5 text-[13.5px] text-mute">معمولاً ظرف ۲۴ ساعت پاسخ می‌دهم.</p>
      </Reveal>
    </>
  )
}