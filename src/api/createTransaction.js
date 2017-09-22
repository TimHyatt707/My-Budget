export default function createTransaction(object, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/transactions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fields: object
    })
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        category: record.fields.category,
        amountSpent: record.fields.amountSpent,
        name: record.fields.name,
        timestamp: record.fields.timestamp
      };
    });
}
