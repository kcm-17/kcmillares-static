// Shared utility functions for kcmillares-static

export const cn = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(' ')
