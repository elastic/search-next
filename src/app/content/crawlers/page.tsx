'use client'
import { IndicesTable } from '@/app/components';
import {
  EuiButton,
  EuiFlexGroup,
  EuiSplitPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiBadge,
} from '@elastic/eui';
import { useRouter } from 'next/navigation';
import React from 'react';
//

import { indices } from '@/data/indices';

import { SplitPanel } from '@/app/components';

export default function Crawlers() {
  const crawlerIndices = indices.filter((value) => value.type === 'crawler');
  const router = useRouter();
  return (
    <>
      <EuiFlexGroup>
        <SplitPanel
          title="Web crawler summary"
          summary="6 web crawlers"
          extraSummary={
            <EuiBadge color='success'>3 connected</EuiBadge>
          } />
        <SplitPanel
          title="Sync status"
          summary="0 running syncs"
          extraSummary={
            <EuiText size="s">0 Idle syncs / 0 Orphaned syncs / 0 Sync errors </EuiText>
          } />
      </EuiFlexGroup>
      <EuiSpacer size='l' />
      <EuiTitle>
        <h3>Available web crawlers</h3>
      </EuiTitle>
      <EuiSpacer size='l' />
      <IndicesTable items={crawlerIndices} />
      <EuiButton onClick={() => router.push('/content/indices/overview')}>View index</EuiButton>
    </>
  )
}

