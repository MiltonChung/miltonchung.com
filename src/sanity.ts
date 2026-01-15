import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'w8nlqrwa',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-01'
});
