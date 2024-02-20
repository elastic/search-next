import { faker } from '@faker-js/faker';
import {
  EuiButton,
  EuiText,
  EuiPopover,
} from '@elastic/eui';

const DOC_COUNT_OPTIONS = { min: 990, max: 1000 }

export const fields = [
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
    doc_count: faker.number.int(DOC_COUNT_OPTIONS),
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


export const columns = [
  {
    field: 'field_name',
    name: 'Field Name',
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
]
