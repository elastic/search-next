// Main Wrapping Layout
// Includes Top Bars and Sidenav
//
import React, { Suspense } from 'react';
//
import '../lib/polyfills';
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiPageTemplate
} from '@elastic/eui';

import { AppProvider } from '@/components/AppProvider';
import { PageWrapper } from '@/components/PageWrapper';
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
        <AppProvider>
          <Suspense>
            <PageWrapper>{children}</PageWrapper>
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}

