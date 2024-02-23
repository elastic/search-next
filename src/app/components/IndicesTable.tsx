'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { IndexType } from "@/lib/definitions"
import {
  EuiBasicTable,
  EuiBadge,
  EuiHealth,
  EuiLink,
  EuiSearchBar,
  EuiSpacer,
} from '@elastic/eui';


export const IndicesTable = ({ items }: { items: Array<any> }) => {

  const totalItemCount = items.length;
  const pagination = {
    pageIndex: 0,
    pageSize: 25,
    totalItemCount,
    pageSizeOptions: [25, 50, 100, 0],
    showPerPageOptions: true,
  };

  const viewIndex = (item: any) => {
    // router.push(`${slugify(item.type)}/overview?title=${item.name}`)
    console.log('View ', item);
  }

  const deleteIndex = (item: any) => {
    console.log('Delete ', item)
  }


  const columns: Array<any> = [
    {
      field: 'name',
      name: 'Name',
      'data-test-subj': 'nameCell',
      render: (name: any, item: any) => {
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
      render: (health: any) => {
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
      render: (type: any) =>
        (<span style={type === 'api' ? { textTransform: 'uppercase' } : { textTransform: "capitalize" }}>{type}</span>)
    },
    {
      field: 'connected',
      name: 'Ingestion status',
      'data-test-subj': 'ingestStatusCell',
      render: (status: any) => {
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
        items={items}
        columns={columns}
      />
    </>
  )

}
