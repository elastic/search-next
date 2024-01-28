import React, { useState } from 'react';
import { css } from '@emotion/react';

import {
  EuiBasicTable,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiTable,
  EuiTitle,
} from '@elastic/eui';

import { documents } from '@/data/documents';

const TableCss = {
  table: css({
    '& td': {
      border: "none",
    },

  }),
}



const DocumentItem = ({ doc }) => {
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

const DocumentViewTable = () => {

  const columns = [
    {
      field: 'title',
      render: (title, doc) => (
        <DocumentItem doc={doc} />
      )
    }
  ]

  const items = () => {
    documents.map((doc) => (
      <EuiFlexItem>
        <DocumentItem doc={doc} key={doc.id} />
      </EuiFlexItem>
    ))
  }

  return (
    <EuiFlexGroup direction="column" gutterSize="s">
      {documents.map((doc) => (
        <EuiFlexItem>
          <DocumentItem doc={doc} key={doc.id} />
        </EuiFlexItem>
      ))
      }
    </EuiFlexGroup>
  )
}

export { DocumentViewTable }
