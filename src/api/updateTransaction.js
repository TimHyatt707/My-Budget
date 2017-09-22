export default function updateTransaction(id, changes, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/transactions/${id}`, {
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
        amountSpent: record.fields.amountSpent,
        name: record.fields.name,
        timestamp: record.fields.timestamp
      };
    });
}
