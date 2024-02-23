'use client';
import React, { PropsWithChildren } from 'react';
import { EuiProvider, EuiProviderProps } from '@elastic/eui';

import { EmotionCacheProvider } from '@/components/emotion-cache-provider';
const CustomEuiProvider = (props: Partial<EuiProviderProps<{}>>) => (
  <EuiProvider
    {...props}
  />
);
export const AppProvider = ({ children }: PropsWithChildren) => (

  <EmotionCacheProvider
    options={{ key: 'search-next' }}
    providerCacheKey="cache"
    providerComponent={CustomEuiProvider}
  >
    {children}
  </EmotionCacheProvider>
)
