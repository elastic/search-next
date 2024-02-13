import React from 'react'
import { EuiButton } from '@elastic/eui'


export const DATA = {
  pageTitle: "search-connector",
  rootSlug: 'connectors',
  showBreadcrumb: true,
  rightSideItems: [
    <EuiButton fill iconSide='right' iconType='arrowDown'>Sync</EuiButton>,
    <EuiButton iconSide='right' iconType='arrowDown' >Search Applications</EuiButton>
  ],
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
    },
    {
      id: 'documents',
      label: 'Documents',
    },
    {
      id: 'mappings',
      label: 'Mappings',
    },
    {
      id: 'sync-rules',
      label: 'Sync Rules',
    },
    {
      id: 'scheduling',
      label: 'Scheduling',
    },
    {
      id: 'pipelines',
      label: 'Pipelines',
    },
    {
      id: 'configuration?isBeta=true?notEnterpiseSearch=true?isNatieveConnector=true',
      label: 'Configuration',
    },
  ]
}

