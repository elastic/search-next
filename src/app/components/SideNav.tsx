'use client'
import React from 'react';
//
import { useParams, useRouter } from 'next/navigation';
//
import {
  EuiSideNav,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTitle,
  htmlIdGenerator,
} from '@elastic/eui';


export const SideNav = () => {

  const router = useRouter();
  const params = useParams();

  const sideNavItems = [
    {
      name: 'Content',
      id: 'content',
      items: [
        {
          name: "Indices",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/content/api-index'),
        },
        {
          name: "Connectors",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/content/connectors'),
        },
        {
          name: "Web Crawlers",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/content/crawlers'),
        },
        {
          name: "Settings",
          id: htmlIdGenerator('basicExample')(),
          onClick: () => router.push('/content/settings'),
        },




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
    {
      name: 'Settings',
      id: 'settings',
      items: [
        {
          name: "Trained Models",
          id: 'trained-models',
          onClick: () => router.push('/trained-models'),
        },
        {
          name: "Synonyms",
          id: 'synonyms',
          onClick: () => router.push('/'),
        },
      ]
    },
  ]
  return (

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
  )
}