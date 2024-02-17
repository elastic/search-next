import React, { useState } from 'react'
import moment from 'moment';

import {
  EuiBasicTable,
  EuiSpacer,
  EuiTablePagination
} from '@elastic/eui';

import { models } from '@/data/models';

const ModelTable = () => {

  const columns = [
    {
      field: "id",
      name: "Model ID"
    },
    {
      field: "description",
      name: "Description"
    },
    {
      field: "type",
      name: "Type"
    },
    {
      field: "is_running",
      name: "State"
    },
    {
      name: "Actions",
      actions: [],
    },
  ]

  return (
    <>
      <EuiBasicTable columns={columns} items={models} />
      <EuiSpacer size="m" />
      <EuiTablePagination itemsPerPage={25} pageCount={1} activePage={1} />
    </>
  )
}

export { ModelTable }
