export default function updateCategory(
  id,
  changes,
  { API_BASE_URL, PORT },
  token
) {
  return fetch(`${API_BASE_URL}${PORT}/categories/${id}`, {
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
