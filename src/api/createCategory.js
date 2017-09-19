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
      return {
        id: record.id,
        body: record.fields.category,
        subject: record.fields.amountSpent,
        read: record.fields.limit
      };
    });
}
