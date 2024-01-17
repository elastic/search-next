import React from 'react'

import {

} from '@elastic/eui'

import RootLayout from '@/components/layout'
import { API_DATA } from './data'

export default function Overview() {

  console.log(API_DATA)

  return (
    <RootLayout
      pageData={API_DATA}
    >
      Index overview
    </RootLayout>
  )
}

