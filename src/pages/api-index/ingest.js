import React from 'react'
import { useRouter } from 'next/router'

import {

} from '@elastic/eui'
import RootLayout from '@/components/layout'

export default function Overview() {
  const router = useRouter()

  const DATA = {
    pageTitle: "search-mango",
    description: "Create a search optimized Elasticsearch index to store your content. Start by selecting an ingestion method. ",
    rightSideItems: [
    ],
    tabs: []
  }

  return (
    <RootLayout
      pageData={DATA}
    >
      Ingest methods
    </RootLayout>
  )
}

