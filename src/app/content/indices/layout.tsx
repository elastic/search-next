'use client'
//
import React from 'react';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function IndicesLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Index detail"}
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
          },
          {
            id: 'documents',
            label: 'Documents',
          },
          {
            id: 'mappings',
            label: 'Mappings',
          },
          {
            id: 'pipelines',
            label: 'Pipelines',
          },
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
