import React from 'react'
import {
} from '@elastic/eui'

import { MappingView, RootLayout } from '@/components'
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <MappingView />
    </RootLayout>
  )
}

