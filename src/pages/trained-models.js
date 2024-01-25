import React from 'react';

import {

} from '@elastic/eui'

import { RootLayout } from '@/components'

const DATA = {
  pageTitle: "Trained Models",
  rootSlug: 'models',
  showBreadcrumb: false,
  rightSideItems: [
  ],
}

export default function Overview() {

  return (
    <RootLayout
      pageData={DATA}
    >
      Trained Models
    </RootLayout>
  )
}
