import React from 'react';
import { useRouter } from 'next/router';

import { RootLayout } from '@/components';
import {
  EuiButton,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiStat,
  EuiHorizontalRule,
} from "@elastic/eui";

const GetStartedPanel = ({ heading, description, slug }) => {
  const router = useRouter();
  return (
    <EuiPanel hasBorder>
      <EuiTitle size="s"><h4>{heading}</h4></EuiTitle>
      <EuiSpacer size='s' />
      <EuiText size="s" color="subdued">{description}</EuiText>
      <EuiSpacer size='m' />
      <EuiButton
        style={{ width: "100%" }}
        onClick={() => router.push(`${slug}`)}>Start</EuiButton>
    </EuiPanel>
  )
}

export default function GettingStarted() {


  const DATA = {
    pageTitle: "Get started with Elasticsearch",
    rightSideItems: [
    ]
  }
  return (
    <RootLayout pageData={DATA}>
      <EuiFlexGroup direction="column">
        <EuiFlexItem><EuiTitle size="s"><h3>Ingest your content</h3></EuiTitle></EuiFlexItem>
        <EuiFlexGroup>
          <EuiFlexItem>
            <GetStartedPanel
              heading="API"
              description="Add documents programmatically by connecting with the API using your preferred language client."
              slug="./content/api-index/overview" />
          </EuiFlexItem>
          <EuiFlexItem>
            <GetStartedPanel
              heading="Connectors"
              description="Extract, transform, index and sync data from a third-party data source."
              slug="./content/connectors/overview" />
          </EuiFlexItem>
          <EuiFlexItem>
            <GetStartedPanel
              heading="Web Crawlers"
              description="Discover, extract, and index searchable content from websites and knowledge bases."
              slug="./content/crawlers/overview" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>


    </RootLayout>
  )
}
