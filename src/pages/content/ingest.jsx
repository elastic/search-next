import React from 'react';
import { useRouter } from 'next/router';

import {
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";

import {
  RootLayout,
} from '@/components';

export default function Ingest() {
  const router = useRouter()

  const PAGE_DATA = {
    pageTitle: "Create new index",
    showBreadcrumb: true,
    rightSideItems: [
    ]
  }
  return (
    <RootLayout pageData={PAGE_DATA}>
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem>
          Create index flow
        </EuiFlexItem>
      </EuiFlexGroup>
    </RootLayout>
  )
}

