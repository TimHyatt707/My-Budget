export default function getCategories() {
  return fetch('https://api.airtable.com/v0/app4N49jXo9XVuKeq/Categories?', {
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
          limit: record.fields.limit
        };
      });
    });
}
