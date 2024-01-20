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
      name: 'Content',
      id: 'content',
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
      id: 'applications',
      items: [
        {
          name: "Search Applications",
          id: 'search-applications',
          onClick: () => router.push('/'),
        },
        {
          name: "Behavioral Analytics",
          id: 'behavioral-analytics',
          onClick: () => router.push('/'),
        }
      ]
    },
    {
      name: 'Getting Started',
      id: 'getting-started',
      items: [
        {
          name: "Elasticsearch",
          id: 'gs-elasticsearch',
          onClick: () => router.push('/'),
        },
        {
          name: "Vector Search",
          id: 'gs-vector-search',
          onClick: () => router.push('/'),
        },
        {
          name: "AI Search",
          id: 'gs-ai-search',
          onClick: () => router.push('/'),
        }
      ]
    },
    {
      name: 'Enterprise Search',
      id: 'enterprise-search',
      items: [
        {
          name: "App Search",
          id: 'app-search',
          onClick: () => router.push('/'),
        },
        {
          name: "Workplace Search",
          id: 'workplace-search',
          onClick: () => router.push('/'),
        },
      ]
    },
  ]


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
          breadcrumbs={pageData.showBreadcrumb && [
            {
              text: (
                <>
                  <EuiIcon size="s" type="arrowLeft" /> Return
                </>
              ),
              color: 'primary',
              'aria-current': false,
              onClick: () => router.push('/'),
            },
          ]}
          tabs={pageData.tabs?.map((tab, index) => ({
            ...tab,
            isSelected: router.pathname.includes(tab.id),
            onClick: () => router.push(`/content/${pageData.rootSlug}/${tab.id}`)
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

