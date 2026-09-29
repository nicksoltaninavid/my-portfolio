import { useCallback, useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { TABS } from '../data/profile'
import type { TabId } from '../data/profile'
import { cx } from '../utils'

interface TabsProps {
  active: TabId
  onChange: (id: TabId) => void
}

export function Tabs({ active, onChange }: TabsProps) {
  const btnRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({})
  const indicatorRef = useRef<HTMLSpanElement>(null)

  const moveIndicator = useCallback((id: TabId) => {
    const btn = btnRefs.current[id]
    const indicator = indicatorRef.current
    if (btn && indicator) {
      indicator.style.left = `${btn.offsetLeft}px`
      indicator.style.width = `${btn.offsetWidth}px`
    }
  }, [])

  useEffect(() => {
    moveIndicator(active)
  }, [active, moveIndicator])

  useEffect(() => {
    const onResize = () => moveIndicator(active)
    window.addEventListener('resize', onResize)
    document.fonts?.ready.then(() => moveIndicator(active))
    return () => window.removeEventListener('resize', onResize)
  }, [active, moveIndicator])

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null
    if (e.key === 'ArrowLeft') next = (index + 1) % TABS.length
    else if (e.key === 'ArrowRight') next = (index - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = TABS.length - 1
    if (next !== null) {
      e.preventDefault()
      const target = TABS[next]
      onChange(target.id)
      btnRefs.current[target.id]?.focus()
    }
  }

  return (
    <div className="sticky top-0 z-50 -mx-6 mt-7 border-b border-line bg-cream/90 px-6 backdrop-blur-md">
      <nav role="tablist" aria-label="بخش‌های سایت" className="no-scrollbar relative flex overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => { btnRefs.current[tab.id] = el }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={cx(
              'shrink-0 px-3.5 py-3 text-[15px] transition-colors duration-200',
              active === tab.id ? 'font-bold text-ink' : 'text-mute hover:text-ink',
            )}
          >
            {tab.label}
          </button>
        ))}
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="absolute bottom-[-1px] left-0 h-0.5 rounded bg-terra transition-[left,width] duration-300 ease-out"
          style={{ width: 0 }}
        />
      </nav>
    </div>
  )
}