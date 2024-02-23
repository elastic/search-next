'use client'
//
import React from 'react';
//
import { EuiButton, EuiPageTemplate } from '@elastic/eui';

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <EuiPageTemplate.Header
        pageTitle={"Content Settings"}
        description="These settings apply to all new Elasticsearch indices created by Search ingestion mechanisms. For API ingest-based indices, remember to include the pipeline when you ingest documents. These features are powered by ingest pipelines."
        rightSideItems={[
          <EuiButton
            key="save"
            fill
            isDisabled
          >Save</EuiButton>,
          <EuiButton
            key="reset"
            fill
            isDisabled
          >Reset</EuiButton>

        ]}
      />
      <EuiPageTemplate.Section>
        {children}
      </EuiPageTemplate.Section>
    </>
  )
}
