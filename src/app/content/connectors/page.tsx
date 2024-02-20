'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
//
import {
  EuiFlexGroup,
  EuiSpacer,
  EuiTitle,
  EuiButton,
  EuiText,
} from '@elastic/eui';

import { indices } from '@/data/indices';
import { IndicesTable, SplitPanel } from '@/app/components';

export default function Connectors() {
  const connectorIndices = indices.filter((value) => value.type === 'connector');
  const router = useRouter();
  return (
    <>
      <EuiFlexGroup>
        <SplitPanel
          title="Connector summary"
          summary="1 connectors"
          extraSummary={
            <EuiText size="s">0 idle syncs / 0 orpahned syncs / 0 sync errors</EuiText>
          } />
        <SplitPanel
          title='Sync status'
          summary="0 running syncs"
          extraSummary={
            <EuiText size="s">0 idle syncs / 0 orpahned syncs / 0 sync errors</EuiText>
          } />
      </EuiFlexGroup>
      <EuiSpacer size='l' />
      <EuiTitle>
        <h3>Available connectors</h3>
      </EuiTitle>
      <EuiSpacer size='l' />
      <IndicesTable items={connectorIndices} />
      <EuiButton onClick={() => router.push('/content/indices/overview')}>View index</EuiButton>
    </>
  )
}
