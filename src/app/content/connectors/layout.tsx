'use client'
//
import React from 'react';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Connectors"}
        rightSideItems={[
          <EuiButton key="native">New Native Connector</EuiButton>,
          <EuiButton key="connector">New Connector Client</EuiButton>,
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
