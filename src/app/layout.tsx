// Main Wrapping Layout
// Includes Top Bars and Sidenav
//
import classNames from 'classnames';
import React, { Suspense } from 'react';
//
import '../lib/polyfills';
import '@elastic/eui/dist/eui_theme_light.css';
import { interFont, robotoMonoFont } from '../lib/fonts';

import { AppProvider } from '@/components/AppProvider';
import { PageWrapper } from '@/components/PageWrapper';
//
//
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const classes = classNames(
    // Define font variables
    interFont.variable,
    robotoMonoFont.variable,

    // Set default font
    interFont.className,
  );

  return (
    <AppProvider>
      <html lang="en">
        <body className={classes}>
          <Suspense>
            <PageWrapper>{children}</PageWrapper>
          </Suspense>
        </body>
      </html>
    </AppProvider>
  );
}

