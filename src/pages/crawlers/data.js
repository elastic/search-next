export const DATA = {
  pageTitle: "search-crawler",
  rootSlug: 'crawlers',
  showBreadcrumb: true,
  rightSideItems: [
  ],
  tabs: [
    {
      label: 'Overview',
      id: 'overview',
    },
    {
      label: 'Documents',
      id: 'documents',
    },
    {
      label: 'Mappings',
      id: 'mappings',
    },
    {
      label: 'Domains',
      id: 'domains',
    },
    {
      label: 'Schedules',
      id: 'schedules',
    },
    {
      label: 'Pipelines',
      id: 'pipelines'
    },
    {
      label: 'Configuration',
      id: 'configuration'
    },
  ],
  panels: [
    {
      id: 'name',
      title: 'Name',
      value: 'mango',
      isEditable: true,
    },
    {
      id: 'description',
      title: 'Description',
      value: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      isEditable: true,
    },
    {
      id: 'ingestion_type',
      title: 'Ingestion Type',
      value: 'Crawler',
      isEditable: false,
    },
    {
      id: 'domain_count',
      title: 'Domain count',
      value: 1,
      isEditable: false,
    },
    {
      id: 'document_count',
      title: 'Document count',
      value: 9828,
      isEditable: false,
    },
  ]
}
