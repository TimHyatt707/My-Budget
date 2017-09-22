export default function getCategories({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/Categories?`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.records.map(record => {
        return {
          id: record.id,
          amountSpent: record.fields.amountSpent,
          category: record.fields.category,
          limit: record.fields.limit
        };
      });
    });
}
