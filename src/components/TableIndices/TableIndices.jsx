// Main table for content sources
import React from 'react'
import { useRouter } from 'next/router';

import {
  EuiBasicTable,
  EuiButton,
  EuiLink,
  EuiSearchBar,
  EuiSpacer,
} from '@elastic/eui';



const ITEMS = [
  {
    id: '01',
    name: 'Banana',
    type: 'api-index'
  },
  {
    id: '02',
    name: 'Apple',
    type: 'api-index'
  },
  {
    id: '03',
    name: 'Mango',
    type: 'crawlers'
  },
  {
    id: '04',
    name: 'Orange',
    type: 'api-index'
  },
  {
    id: '05',
    name: 'Papaya',
    type: 'connectors'
  },
  {
    id: '06',
    name: 'Pineapple',
    type: 'crawlers'
  },
]

const TableIndices = () => {
  const router = useRouter();

  const columns = [

    {
      field: 'name',
      name: 'Name',
      'data-test-subj': 'nameCell',
      render: (name, entry) => {
        return (
          <EuiLink onClick={() => router.push(`/content/${entry.type}/overview?title=${name}`)}>
            {name}
          </EuiLink>
        )
      },
    },
    {
      field: 'type',
      name: 'Source type',
      'data-test-subj': 'typeCell',
    },
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

