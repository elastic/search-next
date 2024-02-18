'use client'
import { TableIndices } from '@/app/components/IndicesTable';
import {
  EuiButton,
  EuiFlexGroup,
  EuiSplitPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import { useRouter } from 'next/navigation';
import React from 'react';
//

import { indices } from '@/data/indices';

const SplitPanel = ({ title }: { title: string }) => (
  <EuiSplitPanel.Outer grow hasBorder>
    <EuiSplitPanel.Inner>
      <EuiTitle size="xxs"><h4>{title}</h4></EuiTitle>
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner grow={false} color="subdued">
      <EuiText size="s">Extra info</EuiText>
    </EuiSplitPanel.Inner>
  </EuiSplitPanel.Outer>

)
export default function APIIndex() {
  const crawlerIndices = indices.filter((value) => value.type === 'crawler');
  console.log(crawlerIndices);
  const router = useRouter();
  return (
    <>
      <EuiFlexGroup>
        <SplitPanel title="Web crawler summary" />
        <SplitPanel title="Sync status" />
      </EuiFlexGroup>
      <EuiSpacer size='l' />
      <EuiTitle>
        <h3>Available web crawlers</h3>
      </EuiTitle>
      <EuiSpacer size='l' />
      <TableIndices items={crawlerIndices} />
      <EuiButton onClick={() => router.push('/content/indices/overview')}>View index</EuiButton>
    </>
  )
}

