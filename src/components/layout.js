import React from 'react'
import {
  EuiProvider,
  EuiHeader,
  EuiPageTemplate,
  EuiHeaderLogo,
  EuiSideNav,
  htmlIdGenerator,
  EuiTitle,
  EuiIcon,
  EuiFlexItem,
  EuiFlexGroup,
} from '@elastic/eui'


import '@elastic/eui/dist/eui_theme_light.css';
import { useRouter } from 'next/router'

export default function RootLayout({ pageData, children }) {

  const router = useRouter()

  const sideNavItems = [
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
    {
      name: 'Applications',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: "Search Applications",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        },
        {
          name: "Behavioral Analytics",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        }
      ]
    },
    {
      name: 'Getting Started',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: "Elasticsearch",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        },
        {
          name: "Vector Search",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        },
        {
          name: "AI Search",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        }
      ]
    },
    {
      name: 'Enterprise Search',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: "App Search",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        },
        {
          name: "Workplace Search",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/'),
        },
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
          <EuiSideNav items={sideNavItems} aria-label="Left nav" heading={
            <EuiFlexGroup alignItems="center" gutterSize="m">
              <EuiFlexItem grow={false}>
                <EuiIcon type="logoElasticsearch" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiTitle size="xs"><h2>Search</h2></EuiTitle>
              </EuiFlexItem>
            </EuiFlexGroup>
          } />
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

