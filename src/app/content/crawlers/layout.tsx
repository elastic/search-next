'use client'
//
import React from 'react';
import { useRouter } from 'next/navigation';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter();

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Web Crawlers"}
        rightSideItems={[
          <EuiButton
            key="create"
            fill
            iconSide='left'
            iconType='plusInCircle'
            onClick={() => router.push('./crawlers/create')}
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
