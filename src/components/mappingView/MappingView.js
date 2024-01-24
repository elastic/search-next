import React, { useState } from 'react';

import {
  EuiAccordion,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFilterGroup,
  EuiFilterButton,
  EuiHealth,
  EuiPanel,
  EuiText,
  EuiSpacer,
  EuiSearchBar,
} from '@elastic/eui';

import { PendingFields } from './PendingFields';
import { MappingTable } from './MappingTable';


const MappingView = () => {
  const [isTableView, setIsTableView] = useState(true);
  const [isJSONView, setIsJSONView] = useState(false);


  const toggleTableFilter = () => {
    setIsTableView(!isTableView);
    setIsJSONView(!isJSONView);
  }

  const toggleJSONFilter = () => {
    setIsJSONView(!isJSONView);
    setIsTableView(!isTableView);
  }

  const initialQuery = EuiSearchBar.Query.MATCH_ALL;

  const items = [
    {
      id: "01",
      type: "string",
      name: "Field A"
    },
    {
      id: "02",
      type: "boolean",
      name: "Field B"
    },
    {
      id: "03",
      type: "semantic_text",
      name: "Field C"
    },
    {
      id: "04",
      type: "string",
      name: "Field D"
    }



  ]

  const types = [
    { name: 'string', color: 'danger' },
    { name: 'number', color: 'success' },
    { name: 'boolean', color: 'success' },
    { name: 'semantic_text', color: 'warning' },
    { name: 'geo', color: 'success' },
  ];

  const loadTypes = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          types.map((type) => ({
            value: type.name,
            view: <EuiHealth color={type.color}>{type.name}</EuiHealth>,
          }))
        );
      }, 100);
    });
  };

  return (
    <EuiFlexGroup gutterSize="m" direction="column">

      <EuiFlexItem>
        <EuiSearchBar
          defaultQuery={initialQuery}
          box={{
            placeholder: 'type:semantic_text',
            incremental: false,
            schema: {
              strict: true,
              fields: {
                type: { type: 'string' },
                name: { type: 'string' },
              },
            }
          }}
          filters={[
            {
              type: 'field_value_selection',
              field: 'type',
              name: 'Tag',
              multiSelect: 'or',
              operator: 'exact',
              options: () => loadTypes(),
            }
          ]}
        />
        {/* <EuiFilterGroup> */}
        {/*   <EuiFilterButton */}
        {/*     withNext */}
        {/*     hasActiveFilters={isTableView} */}
        {/*     onClick={toggleTableFilter} */}
        {/*   > */}
        {/*     Table */}
        {/*   </EuiFilterButton> */}
        {/*   <EuiFilterButton */}
        {/*     hasActiveFilters={isJSONView} */}
        {/*     onClick={toggleJSONFilter} */}
        {/*   > */}
        {/*     JSON */}
        {/*   </EuiFilterButton> */}
        {/* </EuiFilterGroup> */}

      </EuiFlexItem>
      <EuiFlexItem>
        <PendingFields />
      </EuiFlexItem>
      <EuiFlexItem>
        <MappingTable />
      </EuiFlexItem>

    </EuiFlexGroup>
  )
}


export { MappingView }
