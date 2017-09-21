export default function updateTransaction(id, changes) {
  return fetch(
    `https://api.airtable.com/v0/appjAkSe9KeAO6vMv/transactions/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer keyZjFgCqHqPR1F8o',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        fields: changes
      })
    }
  )
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
