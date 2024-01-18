import React from 'react'
import { useRouter } from 'next/router'

import {

} from '@elastic/eui'
import RootLayout from '@/components/layout'
import { DATA } from './data'

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      Mappings
    </RootLayout>
  )
}

