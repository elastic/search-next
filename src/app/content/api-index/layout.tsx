'use client'
//
import React from 'react';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Elasticsearch indices"}
        rightSideItems={[
          <EuiButton
            key="create"
            fill
            iconSide='left'
            iconType='plusInCircle'
          >Create a new index</EuiButton>
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
