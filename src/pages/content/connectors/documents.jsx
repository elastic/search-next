import React from 'react'

import {

} from '@elastic/eui'

import { RootLayout, DocumentView } from '@/components'
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <DocumentView />
    </RootLayout>
  )
}

