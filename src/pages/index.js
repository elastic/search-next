import React from 'react';

import RootLayout from '@/components/layout';
import { EuiText } from "@elastic/eui";

export default function Home() {
  return (
    <RootLayout>
      <EuiText color="subdued">This is working</EuiText>
    </RootLayout>
  )
}
