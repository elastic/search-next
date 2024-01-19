import React from 'react'

import {

} from '@elastic/eui'

import RootLayout from '@/components/layout'
import { StatPanels } from '@/components';
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <StatPanels pageData={DATA} />
      Index overview
    </RootLayout>
  )
}

