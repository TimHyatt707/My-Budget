export default function updateCategory(id, changes, { API_BASE_URL }, token) {
  return fetch(`${API_BASE_URL}/categories/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`
    },
    body: changes
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        category: record.name,
        limit: record.limit
      };
    });
}
