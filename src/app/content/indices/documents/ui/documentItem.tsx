'use client';
//
import React from 'react';
import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTable,
  EuiTitle,
} from '@elastic/eui';

export const DocumentItem = ({ doc }: { doc: object }) => {
  const docColumns = [
    {
      id: 'type',
      width: '32px',
    },
    {
      id: 'field'
    }
  ]
  return (
    <EuiPanel hasBorder>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiTitle size='xxs'><h4>{doc.title}</h4></EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}><EuiButtonIcon iconType="iInCircle" /></EuiFlexItem>
        <EuiFlexItem grow={false}><EuiButtonIcon iconType="unfold" /></EuiFlexItem>

      </EuiFlexGroup>
      <EuiTable items={doc} columns={docColumns} />
    </EuiPanel>
  )
}
