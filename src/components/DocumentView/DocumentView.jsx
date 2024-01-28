import React from 'react';
import { useRouter } from 'next/router';

import {
  EuiBasicTable,
  EuiTitle,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSearchBar,
  EuiText,
  EuiPagination,
} from "@elastic/eui";

import {
  RootLayout,
} from '@/components';
import { DocumentViewTable } from './DocumentView.Table';

const DocumentView = () => {

  return (
    <>
      <EuiFlexGroup gutterSize="l" direction="row">
        <EuiFlexItem>
          <EuiTitle><h2>Browse documents</h2></EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSearchBar />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />
      <EuiPagination pageCount={7} activePage={0} />
      <EuiSpacer size="m" />
      <EuiText size="xs">Showing 25 of 10,000. Search results maxed at 10,000 documents.</EuiText>
      <EuiSpacer size="m" />
      <DocumentViewTable />


    </>
  )
}

export { DocumentView }
