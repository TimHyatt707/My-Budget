export default function updateCategory(id, changes, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/Categories/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
    })
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: id,
        category: record.fields.category,
        limit: record.fields.limit
      };
    });
}
