'use client';

import React from 'react';
//
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiPanel,
  EuiSpacer,
  EuiText
} from '@elastic/eui';
import { EmotionCacheProvider } from '@/utils/emotion-cache-provider';
import { CustomEuiProvider } from '@/utils/custom-eui-provider';
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
          <EuiSpacer size="s" />
          <EuiPanel color='subdued'>
            {children}
          </EuiPanel>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
