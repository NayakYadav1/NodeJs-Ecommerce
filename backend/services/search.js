import { Client } from '@elastic/elasticsearch';

const esClient = new Client({ node: 'http://localhost:9200' });

export const searchProducts = async (query) => {
  const { body } = await esClient.search({
    index: 'products',
    body: {
      query: {
        multi_match: {
          query,
          fields: ['name^3', 'description', 'tags']
        }
      }
    }
  });
  return body.hits.hits;
};