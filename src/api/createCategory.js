export default function createCategory(object) {
  return fetch(`https://api.airtable.com/v0/app4N49jXo9XVuKeq/Categories`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer keyZjFgCqHqPR1F8o',
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
      console.log(record);
      return {
        id: record.id,
        category: record.fields.category,
        amountSpent: record.fields.amountSpent,
        limit: record.fields.limit
      };
    });
}
