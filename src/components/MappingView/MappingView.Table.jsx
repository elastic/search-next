'use client'
import React, { useState } from 'react';

import {
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiCallOut,
  EuiFilterButton,
  EuiFilterGroup,
  EuiIcon,
  EuiPopover,
  EuiText
} from '@elastic/eui';
import { faker } from '@faker-js/faker';

// Field object
//----
// id: faker.string.uuid(),
// field_name: "author",
// field_type: "string",
// doc_count: faker.number.int(DOC_COUNT_OPTIONS),
// in_index: true,

// const FIELD_TYPES_ARRAY = ["string", "number", "keyword", "object"]

const DOC_COUNT_OPTIONS = { min: 990, max: 1000 }

const FIELD_DATA = [
  {
    id: faker.string.uuid(),
    field_name: "author",
    field_type: "string",
    doc_count: faker.number.int(DOC_COUNT_OPTIONS),
    in_index: true,
  },
  {
    id: faker.string.uuid(),
    field_name: "page_count",
    field_type: "number",
    doc_count: faker.number.int(DOC_COUNT_OPTIONS),
    in_index: true,
  },
  {
    id: faker.string.uuid(),
    field_name: "release_date",
    field_type: "date",
    doc_count: faker.number.int(DOC_COUNT_OPTIONS),
    in_index: true,
  },
  {
    id: faker.string.uuid(),
    field_name: "summary",
    field_type: "string",
    doc_count: faker.number.int({ min: 0, max: 1000 }),
    in_index: true,
  },
  {
    id: faker.string.uuid(),
    field_name: "title",
    field_type: "string",
    doc_count: faker.number.int(DOC_COUNT_OPTIONS),
    in_index: true,
  },
]


const MappingViewTable = () => {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [data, setData] = useState(FIELD_DATA);


  const INDEX_LOC = 4;
  const newItems = [
    ...FIELD_DATA.slice(0, INDEX_LOC),
    {
      id: faker.string.uuid(),
      field_name: "summary.semantic_text",
      field_type: "semantic_text",
      doc_count: faker.number.int({ min: 0, max: 1000 }),
      in_index: false,
    },
    ...FIELD_DATA.slice(INDEX_LOC)
  ]

  const handleActionClick = () => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  };

  const handleSemanticClick = () => {
    setData(newItems)
  }

  const closePopover = () => {
    setIsPopoverOpen(false);
  }

  const columns = [
    {
      field: 'field_name',
      name: 'Field Name',
      render: (value) => {
        if (value === 'summary' && data === FIELD_DATA) {
          return (
            <EuiPopover
              button={<EuiButton size="s" color="success" iconSide='right' iconType='sparkles' onClick={handleActionClick}>{value}</EuiButton>}
              isOpen={isPopoverOpen}
              closePopover={closePopover}
            >
              <EuiText>
                <p>Popover content that&rsquo;s wider than the default width</p>
              </EuiText>
              <EuiButton onClick={handleSemanticClick}>Add semantic_text</EuiButton>
            </EuiPopover>)
        } else {
          return <EuiText size='s'>{value}</EuiText>
        }
      }
    },
    {
      field: 'field_type',
      name: 'Field Type',
      width: "180px",
    },
    {
      field: 'doc_count',
      name: 'Documents',
      width: "160px",
    },
    {
      field: 'in_index',
      name: 'Indexed',
      width: "120px",
      render: (field) => (
        <>
          <EuiIcon color={field ? "success" : "danger"} type={field ? "checkInCircleFilled" : 'error'} />
        </>
      )
    },
  ]

  return (
    <>
      <EuiBasicTable
        columns={columns}
        items={data}
      />
    </>
  )

}

export { MappingViewTable }
