'use client'
import { EuiTitle, EuiButton } from '@elastic/eui';
import { useRouter } from 'next/navigation';
import React from 'react';
//

export default function APIIndex() {
  const router = useRouter();
  return (
    <>
      <EuiTitle>
        <h3>
          Crawlers overview page
        </h3>
      </EuiTitle>

      <EuiButton onClick={() => router.push('/content/indices/overview')}>View index</EuiButton>
    </>
  )
}

