import React from 'react'
import { useRouter } from 'next/router'

import {

} from '@elastic/eui'
import RootLayout from '@/components/layout'

export default function Overview() {
  const router = useRouter()

  const DATA = {
    pageTitle: "search-mango",
    rightSideItems: [
    ],
    tabs: [
      {
        label: 'Overview',
        onClick: () => router.push('./overview')
      },
      {
        label: 'Documents',
        onClick: () => router.push('./documents')
      },
      {
        label: 'Mappings',
        isSelected: true,
        onClick: () => router.push('./mappings')
      },
      {
        label: 'Pipelines',
        onClick: () => router.push('./pipelines')
      },
    ]
  }

  return (
    <RootLayout
      pageData={DATA}
    >
      Index mappings
    </RootLayout>
  )
}

