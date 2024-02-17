'use client'
//
import React from 'react';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Web Crawlers"}
        rightSideItems={[
          <EuiButton
            fill
            iconSide='left'
            iconType='plusInCircle'
          >
            New Web Crawler
          </EuiButton>
        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
