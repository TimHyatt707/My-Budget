export default function getCategories(id, { API_BASE_URL, PORT }, token) {
  return fetch(`${API_BASE_URL}${PORT}/users/${id}/categories?`, {
    method: "GET",
    headers: {
      Authorization: `${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.records.map(record => {
        return {
          id: record.id,
          category: record.name,
          limit: record.limit
        };
      });
    });
}
