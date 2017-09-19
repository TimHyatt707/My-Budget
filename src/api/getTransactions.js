export default function getTransactions() {
  return fetch('https://api.airtable.com/v0/appjAkSe9KeAO6vMv/transactions?', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer keyZjFgCqHqPR1F8o'
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
