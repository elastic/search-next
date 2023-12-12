import {
  EuiPageTemplate,
  EuiProvider,
} from '@elastic/eui'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EuiProvider colorMode="light">
          <EuiPageTemplate
            panelled={true}
            restrictWidth={false}
            offset={true}
            grow={false}
          >
            <EuiPageTemplate.Sidebar sticky={true}>
              This is the navigation
            </EuiPageTemplate.Sidebar>
            <EuiPageTemplate.Header />
            <EuiPageTemplate.Header />
            <EuiPageTemplate.Section>
              {children}
            </EuiPageTemplate.Section>
          </EuiPageTemplate>
        </EuiProvider>
      </body>
    </html>
  )
}

