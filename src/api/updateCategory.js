export default function updateCategory(id, changes) {
  return fetch(
    `https://api.airtable.com/v0/app4N49jXo9XVuKeq/Categories/${id}`,
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
        limit: record.fields.limit
      };
    });
}
