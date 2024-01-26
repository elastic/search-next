// Main table for content sources
import React from 'react'
import { useRouter } from 'next/router';

import {
  EuiBasicTable,
  EuiButton,
  EuiBadge,
  EuiHealth,
  EuiLink,
  EuiSearchBar,
  EuiSpacer,
} from '@elastic/eui';



const ITEMS = [
  {
    id: '01',
    name: 'Banana',
    type: 'api',
    health: true,
    connected: true,
    docsCount: 280,
  },
  {
    id: '02',
    name: 'Apple',
    type: 'api',
    health: true,
    connected: true,
    docsCount: 9438,
  },
  {
    id: '03',
    name: 'Mango',
    type: 'crawler',
    health: true,
    connected: true,
    docsCount: 2938,
  },
  {
    id: '04',
    name: 'Orange',
    type: 'api',
    health: true,
    connected: true,
    docsCount: 84,
  },
  {
    id: '05',
    name: 'Papaya',
    type: 'connector',
    health: false,
    connected: true,
    docsCount: 3020,
  },
  {
    id: '06',
    name: 'Pineapple',
    type: 'crawler',
    health: true,
    connected: true,
    docsCount: 1048,
  },
]

const TableIndices = () => {
  const router = useRouter();

  const viewIndex = (index) => {
    console.log(index)
  }
  const deleteIndex = (index) => {
    console.log(index)
  }

  const columns = [

    {
      field: 'name',
      name: 'Name',
      'data-test-subj': 'nameCell',
      render: (name, entry) => {

        let slug;

        if (entry.type === "connector") {
          slug = 'connectors';
        } else if (entry.type === "crawler") {
          slug = 'crawlers'
        } else {
          slug = 'api-index'
        }


        return (
          <EuiLink onClick={() => router.push(`/content/${slug}/overview?title=${name}`)}>
            {name}
          </EuiLink>
        )
      },
    },
    {
      field: 'health',
      name: 'Index health',
      'data-test-subj': 'healthCell',
      width: '150px',
      render: (health) => {
        return (
          <EuiHealth textSize="s" color={health ? "success" : "danger"}>{health ? "Healthy" : "Errors"}</EuiHealth>
        )
      },
    },
    {
      field: 'docsCount',
      name: 'Docs count',
      'data-test-subj': 'docsCountCell',
    },
    {
      field: 'type',
      name: 'Ingestion method',
      'data-test-subj': 'typeCell',
      render: (type) =>
        (<span style={type === 'api' ? { textTransform: 'uppercase' } : { textTransform: "capitalize" }}>{type}</span>)
    },
    {
      field: 'connected',
      name: 'Ingestion status',
      'data-test-subj': 'ingestStatusCell',
      render: (status) => {
        return (
          <EuiBadge color={status ? "success" : "danger"}>{status ? "Connected" : "Not connected"}</EuiBadge>
        )
      },
    },
    {
      name: 'Actions',
      actions: [
        {
          name: <span>View</span>,
          description: 'View index',
          icon: 'eye',
          type: 'icon',
          onClick: viewIndex,
        },
        {
          name: <span>Delete</span>,
          description: 'Delete index',
          icon: 'trash',
          color: 'danger',
          type: 'icon',
          onClick: deleteIndex,
        },
      ]
    }
  ]

  return (
    <>
      <EuiSearchBar
        query={''}
      />
      <EuiSpacer size="m" />
      <EuiBasicTable
        items={ITEMS}
        columns={columns}
      />
    </>
  )

}

export { TableIndices }

