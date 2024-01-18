import React from 'react'
import {
  EuiProvider,
  EuiHeader,
  EuiPageTemplate,
  EuiHeaderLogo,
  EuiSideNav,
  htmlIdGenerator,
} from '@elastic/eui'


import '@elastic/eui/dist/eui_theme_light.css';
import { useRouter } from 'next/router'

export default function RootLayout({ pageData, children }) {

  const router = useRouter()

  const sideNavItems = [
    {
      name: 'Home',
      id: htmlIdGenerator('basicExample')(),
      onClick: () => router.push('/'),
    },
    {
      name: 'Content',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: "Indices",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        }
      ]
    },
  ]


  console.log(pageData)

  return (
    <EuiProvider colorMode="light">
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo>Elastic</EuiHeaderLogo>
            ]
          }
        ]}
      />
      <EuiHeader />
      <EuiPageTemplate
        restrictWidth={false}
        panelled={true}
      >
        <EuiPageTemplate.Sidebar sticky>
          <EuiSideNav items={sideNavItems} aria-label="Left nav" />
        </EuiPageTemplate.Sidebar>
        <EuiPageTemplate.Header
          pageTitle={pageData.pageTitle}
          description={pageData.description}
          rightSideItems={pageData.rightSideItems}
          tabs={pageData.tabs?.map((tab, index) => ({
            ...tab,
            onClick: () => router.push(`/${tab.id}`)
          }))}
        />
        <EuiPageTemplate.Section>
          {children}
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
      )
    </EuiProvider>
  )
}

