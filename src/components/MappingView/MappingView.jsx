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

import { PendingFields } from './MappingView.PendingFields';
import { MappingViewTable } from './MappingView.Table';


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
        <EuiSearchBar />
      </EuiFlexItem>
      <EuiFlexItem>
        <PendingFields />
      </EuiFlexItem>
      <EuiFlexItem>
        <MappingViewTable />
      </EuiFlexItem>

    </EuiFlexGroup>
  )
}


export { MappingView }
