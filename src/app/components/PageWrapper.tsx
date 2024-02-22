'use client';
import React from 'react';
import { EuiHeader, EuiPageTemplate, EuiHeaderLogo } from '@elastic/eui'

import { SideNav } from '@/components/index'

interface PageWrapperProps {
  children: React.ReactNode
}
export const PageWrapper = ({ children }: PageWrapperProps) => (

  <>
    <EuiHeader
      theme="dark"
      sections={[
        {
          items: [
            <EuiHeaderLogo key="elastic">Elastic</EuiHeaderLogo>
          ]
        }
      ]}
    />
    <EuiHeader />
    <EuiPageTemplate
      restrictWidth={false}
      panelled={true}
    >
      <EuiPageTemplate.Sidebar sticky>
        <SideNav />
      </EuiPageTemplate.Sidebar>
      {children}
    </EuiPageTemplate>
  </>
)
