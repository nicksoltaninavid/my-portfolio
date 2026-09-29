import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LoadingScreen } from './components/LoadingScreen'
import { Marquee } from './components/Marquee'
import { Tabs } from './components/Tabs'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import type { TabId } from './data/profile'

type Phase = 'boot' | 'reveal' | 'ready'

function Panel({ id, children }: { id: TabId; children: ReactNode }) {
  return (
    <section
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className="panel-in py-10"
    >
      {children}
    </section>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<Phase>('boot')
  const [active, setActive] = useState<TabId>('about')

  useEffect(() => {
    if (phase !== 'boot') return
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 10)
        if (next >= 100) {
          window.clearInterval(id)
          window.setTimeout(() => setPhase('reveal'), 250)
        }
        return next
      })
    }, 55)
    return () => window.clearInterval(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'reveal') return
    const t = window.setTimeout(() => setPhase('ready'), 450)
    return () => window.clearTimeout(t)
  }, [phase])

  return (
    <>
      {phase !== 'ready' && <LoadingScreen progress={progress} fading={phase === 'reveal'} />}

      {phase !== 'boot' && (
        <div className="app-in mx-auto max-w-[800px] px-6 max-sm:px-[18px]">
          <Header />
          <Tabs active={active} onChange={setActive} />
          <Marquee />
          <main className="min-h-[50vh]">
            {active === 'about' && <Panel id="about"><About /></Panel>}
            {active === 'projects' && <Panel id="projects"><Projects /></Panel>}
            {active === 'skills' && <Panel id="skills"><Skills /></Panel>}
            {active === 'contact' && <Panel id="contact"><Contact /></Panel>}
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}