export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'فرانت‌اند',
    items: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'TypeScript'],
  },
  {
    title: 'استایل و ابزار',
    items: ['Tailwind CSS', 'Bootstrap', 'Git / GitHub', 'Vite / VS Code'],
  },
]

export const LEARNING_NOTE =
  '✎ در حال یادگیری: الگوهای پیشرفته React، تست‌نویسی و عمق بیشتر TypeScript.'

export interface Fact {
  value: string
  label: string
}

export const FACTS: Fact[] = [
  { value: '۳+', label: 'پروژهٔ کامل' },
  { value: '۶+', label: 'تکنولوژی روزمره' },
  { value: '∞', label: 'فنجان قهوه' },
]

export const ROTATOR_WORDS = ['سریع', 'تمیز', 'واکنش‌گرا', 'دوست‌داشتنی'] as const

export const TECH_MARQUEE = [
  'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT',
  'TAILWIND', 'BOOTSTRAP', 'GIT', 'GITHUB', 'VITE',
] as const