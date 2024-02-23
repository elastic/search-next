import { Inter, Roboto_Mono } from 'next/font/google'

export const interFont = Inter({
  subsets: ['latin'],
  fallback: ['roboto', 'system-ui', 'arial'],
  variable: '--font-body',
});

export const robotoMonoFont = Roboto_Mono({
  subsets: ['latin'],
  fallback: ['menlo', 'courier', 'monospace'],
  variable: '--font-monospace',
});

