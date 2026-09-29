import { LEARNING_NOTE, SKILL_GROUPS } from '../../data/skills'
import { Reveal } from '../Reveal'

export function Skills() {
  return (
    <div className="grid gap-7 md:grid-cols-2 md:gap-x-11">
      {SKILL_GROUPS.map((group, i) => (
        <Reveal key={group.title} delay={i * 0.08}>
          <h3 className="mb-2 text-xs font-bold tracking-wide text-mute">{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item} className="skill-row">
                <span className="dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}

      <Reveal delay={0.16} className="md:col-span-2">
        <p className="rounded-xl bg-terra-soft px-4 py-3 text-[13.5px]">{LEARNING_NOTE}</p>
      </Reveal>
    </div>
  )
}