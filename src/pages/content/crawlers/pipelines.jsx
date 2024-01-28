import React from 'react'

import {
} from '@elastic/eui'

import { RootLayout } from '@/components'
import { DATA } from './data';
import { StatPanels } from '@/components';

export default function Pipelines() {

  return (
    <RootLayout
      pageData={DATA}
    >
      <StatPanels pageData={DATA} />
      Pipelines
    </RootLayout>
  )
}


