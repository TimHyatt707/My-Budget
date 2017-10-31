export default function createCategory(id, object, { API_BASE_URL }, token) {
  return fetch(`${API_BASE_URL}/users/${id}/categories`, {
    method: "POST",
    headers: {
      Authorization: `${token}`,
      "Content-type": "application/json"
    },
    body: object
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        category: record.fields.category,
        limit: record.fields.limit
      };
    });
}
