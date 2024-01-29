import { faker } from '@faker-js/faker';

const DOC_COUNT_OPTIONS = { min: 990, max: 1000 }

const INDEX_LOC = 4;
const fields = [
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

const updatedFields = [
  ...fields.slice(0, INDEX_LOC),
  {
    id: faker.string.uuid(),
    field_name: "summary.semantic_text",
    field_type: "semantic_text",
    doc_count: 0,
    in_index: false,
  },
  ...fields.slice(INDEX_LOC)
]
export { fields, updatedFields }
