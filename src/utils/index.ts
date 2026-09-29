/** ترکیب شرطی کلاس‌ها */
export const cx = (...parts: Array<string | false | undefined | null>): string =>
  parts.filter(Boolean).join(' ')