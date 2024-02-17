'use client';
import React, { useState } from 'react';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSearchBar
} from '@elastic/eui'

import { ModelTable, RootLayout } from '@/components'

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
      <EuiFlexGroup gutterSize="l" direction='column'>
        <EuiFlexItem grow={false}>
          <EuiPanel color='subdued' grow={false}>
            Total trained models: <strong>{}</strong>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSearchBar query="" />
        </EuiFlexItem>
        <EuiFlexItem>
          <ModelTable />
        </EuiFlexItem>
      </EuiFlexGroup>
    </RootLayout>
  )
}
