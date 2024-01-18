import React from 'react'
import {
  EuiProvider,
  EuiHeader,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageTemplate,
  EuiHeaderLogo,
  EuiSideNav,
  EuiText,
  EuiTitle,
  EuiIcon,
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


  console.log(router.pathname, pageData)

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
          <EuiSideNav heading={
            <EuiFlexGroup alignItems='center' gutterSize='s'>
              <EuiFlexItem grow={false}>
                <EuiIcon type="logoElasticsearch" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xs">
                  <EuiText>Search</EuiText>
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          } items={sideNavItems} aria-label="Left nav" />
        </EuiPageTemplate.Sidebar>
        <EuiPageTemplate.Header
          pageTitle={pageData.pageTitle}
          description={pageData.description}
          rightSideItems={pageData.rightSideItems}
          tabs={pageData.tabs?.map((tab, index) => ({
            ...tab,
            isSelected: router.pathname.includes(tab.id),
            onClick: () => router.push(`/${pageData.rootSlug}/${tab.id}`)
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

