import React from 'react'
import { useRouter } from 'next/router'

import {
} from '@elastic/eui'
import RootLayout from '@/components/layout'

export default function Overview() {
  const router = useRouter()

  const DATA = {
    pageTitle: "search-crawler",
    rightSideItems: [
    ],
    tabs: [
      {
        label: 'Overview',
        isSelected: true,
        onClick: () => router.push('overview')
      },
      {
        label: 'Documents',
        onClick: () => router.push('documents')
      },
      {
        label: 'Mappings',
        onClick: () => router.push('/mappings')
      },
      {
        label: 'Schedules',
        onClick: () => router.push('/schedules')
      },
      {
        label: 'Pipelines',
        onClick: () => router.push('/pipelines')
      },
    ]
  }

  return (
    <RootLayout
      pageData={DATA}
    >
      Crawler overview
    </RootLayout>
  )
}

