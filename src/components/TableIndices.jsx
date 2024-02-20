// Main table for content sources
import React, { useState } from 'react'
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

import { slugify } from '@/utils/helpers';
import { INDEX_TABLE_ITEMS } from '@/data/indexTableItems';



export const TableIndices = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(25);

  const router = useRouter();

  const viewIndex = (item) => {
    router.push(`${slugify(item.type)}/overview?title=${item.name}`)
  }

  const deleteIndex = (item) => {
    console.log(item)
  }


  const columns = [

    {
      field: 'name',
      name: 'Name',
      'data-test-subj': 'nameCell',
      render: (name, item) => {
        return (
          <EuiLink onClick={() => viewIndex(item)}>
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
        items={INDEX_TABLE_ITEMS}
        columns={columns}
      />
    </>
  )

}


