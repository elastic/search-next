'use client';
// Main Wrapping Layout
// Includes Top Bars and Sidenav
//
import React from 'react';
//
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiPageTemplate
} from '@elastic/eui';
import { EmotionCacheProvider } from '@/utils/emotion-cache-provider';
import { CustomEuiProvider } from '@/utils/custom-eui-provider';
import { SideNav } from './components';
//
//
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmotionCacheProvider
          options={{ key: 'search-next' }}
          providerCacheKey="cache"
          providerComponent={CustomEuiProvider}
        >
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
        </EmotionCacheProvider>
      </body>
    </html>
  );
}

