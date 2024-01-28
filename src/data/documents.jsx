import { faker } from '@faker-js/faker';

const NUM_OF_DOCS = 25;

const documents = []

for (let i = 0; i < NUM_OF_DOCS; i++) {
  documents.push(

    {
      id: faker.string.alphanumeric(16),
      title: faker.commerce.productName(),
      last_crawled_at: faker.date.recent(),
      url_path: faker.internet.url(),
      body_content: faker.commerce.productDescription(),
      domains: faker.internet.domainName(2),
      meta_description: "This is the meta_description field",
    },
  )
}

export { documents }
