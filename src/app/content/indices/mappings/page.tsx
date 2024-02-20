'use client'
import React from 'react';
//
import {
  EuiFlexItem,
  EuiFlexGroup,
  EuiSearchBar,
  EuiBasicTable,
} from '@elastic/eui';

import { columns } from './ui/tableColumns';

export default function APIIndex() {
  return (
    <EuiFlexGroup gutterSize="m" direction="column">
      <EuiFlexItem>
        <EuiSearchBar />
      </EuiFlexItem>
      <EuiFlexItem>
        Table
      </EuiFlexItem>

    </EuiFlexGroup>

  )
}

