import React from 'react'
import { useRouter } from 'next/router'

import {
} from '@elastic/eui'
import RootLayout from '@/components/layout'

export default function Overview() {
  const router = useRouter()

  const DATA = {
    pageTitle: "search-crawler",
    rootSlug: 'api-index',
    rightSideItems: [
    ],
    tabs: [
      {
        label: 'Overview',
        id: 'overview',
      },
      {
        label: 'Documents',
        id: 'documents',
      },
      {
        label: 'Mappings',
        id: 'mappings',
      },
      {
        label: 'Schedules',
        id: 'schedules',
      },
      {
        label: 'Pipelines',
        id: 'pipelines'
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

