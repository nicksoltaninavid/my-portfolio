export type TabId = 'about' | 'projects' | 'skills' | 'contact'

export interface TabItem {
  id: TabId
  label: string
}

export const TABS: TabItem[] = [
  { id: 'about', label: 'درباره من' },
  { id: 'projects', label: 'پروژه‌ها' },
  { id: 'skills', label: 'مهارت‌ها' },
  { id: 'contact', label: 'تماس' },
]

// ═══════════════════════════════════════════
//  TODO: سه مقدار پایین را با اطلاعات واقعی خودت جایگزین کن
// ═══════════════════════════════════════════
export const PROFILE = {
  name: 'نیک سلطانی',
  firstName: 'نیک',
  role: 'توسعه‌دهنده فرانت‌اند جونیور',
  email: 'nicksoltaninavid@gmail.com',
  github: 'https://github.com/nicksoltaninavid',
  linkedin: 'https://www.linkedin.com/in/nicksoltaninavid',
} as const

export const GITHUB_LABEL = PROFILE.github.replace('https://github.com/', '')
export const LINKEDIN_LABEL = `in/${PROFILE.linkedin.split('/in/')[1] ?? ''}`