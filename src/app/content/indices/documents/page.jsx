'use client'
import React from 'react';
//
import {
  EuiFlexItem,
  EuiFlexGroup,
  EuiSpacer,
  EuiText,
  EuiSearchBar,
  EuiTitle,
  EuiPagination,
} from '@elastic/eui';

import { documents } from '@/data/documents';
import { DocumentItem } from './ui/documentItem';
//

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
      <EuiFlexItem key={doc.id}>
        <DocumentItem doc={doc} />
      </EuiFlexItem>
    ))
  }

  return (
    <EuiFlexGroup direction="column" gutterSize="s">
      {documents.map((doc) => (
        <EuiFlexItem key={doc.id}>
          <DocumentItem doc={doc} />
        </EuiFlexItem>
      ))
      }
    </EuiFlexGroup>
  )
}


export default function Documents() {
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
    </>
  )
}

