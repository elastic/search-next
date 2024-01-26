// Helper functions
//

// Slugify
// Returns correct name for index url router (based on the folder structure)
export function slugify(indexType) {
  if (indexType === 'connector') {
    return '/content/connectors';
  } else if (indexType === 'crawler') {
    return '/content/crawlers';
  } else {
    return '/content/api-index'
  }
}

