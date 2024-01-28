import React from 'react'

import {
} from '@elastic/eui'

import { RootLayout, DocumentView } from '@/components'
import { DATA } from './data'

export default function Documents() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <DocumentView />
    </RootLayout>
  )
}


