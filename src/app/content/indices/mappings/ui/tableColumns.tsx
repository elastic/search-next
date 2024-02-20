import { faker } from '@faker-js/faker';

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
]
