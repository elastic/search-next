import React from 'react'

import {

} from '@elastic/eui'

import RootLayout from '@/components/layout'
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      Documents
    </RootLayout>
  )
}

