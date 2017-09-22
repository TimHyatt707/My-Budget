export default function getTransactions({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/transactions?`, {
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
          name: record.fields.name,
          timestamp: record.fields.timestamp
        };
      });
    });
}
