import React, { useState } from 'react';

import {
  EuiButton,
  EuiBasicTable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPopover,
  EuiText,
  EuiSpacer,
  EuiSearchBar,
} from '@elastic/eui';

import { PendingFields } from './MappingView.PendingFields';
import { fields, updatedFields } from '@/data/fieldMappings';

const MappingView = () => {
  const [isTableView, setIsTableView] = useState(true);
  const [isJSONView, setIsJSONView] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [fieldData, setFieldData] = useState(fields);

  const toggleTableFilter = () => {
    setIsTableView(!isTableView);
    setIsJSONView(!isJSONView);
  }

  const toggleJSONFilter = () => {
    setIsJSONView(!isJSONView);
    setIsTableView(!isTableView);
  }

  const handleActionClick = () => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  };

  const handleSemanticClick = () => {
    setFieldData(updatedFields)
  }

  const closePopover = () => {
    setIsPopoverOpen(false);
  }

  const columns = [
    {
      field: 'field_name',
      name: 'Field Name',
      render: (value) => {
        if (value === 'summary' && !!fieldData) {
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
    <EuiFlexGroup gutterSize="m" direction="column">

      <EuiFlexItem>
        <EuiSearchBar />
      </EuiFlexItem>
      <EuiFlexItem>
        {fieldData === updatedFields && <PendingFields />}
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiBasicTable
          columns={columns}
          items={fieldData}
        />
      </EuiFlexItem>

    </EuiFlexGroup>
  )
}


export { MappingView }
