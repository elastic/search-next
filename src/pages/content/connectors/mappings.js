import React from 'react'

import {

} from '@elastic/eui'

import { MappingTable, RootLayout } from '@/components'
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <MappingTable />
    </RootLayout>
  )
}

