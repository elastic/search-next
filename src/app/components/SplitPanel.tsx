'use client';
import React from 'react';
import {
  EuiSplitPanel,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { SplitPanelType } from '@/lib/definitions';

export const SplitPanel = ({ title, summary, extraSummary }: SplitPanelType) => (
  <EuiSplitPanel.Outer grow hasBorder>
    <EuiSplitPanel.Inner>
      <EuiTitle size="xxs"><h4>{title}</h4></EuiTitle>
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner>
      <EuiText size="s">{summary}</EuiText>
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner grow={false} color="subdued">
      {extraSummary}
    </EuiSplitPanel.Inner>
  </EuiSplitPanel.Outer>

)
