export default function deleteCategory(id, { API_BASE_URL, PORT }, token) {
  return fetch(`${API_BASE_URL}${PORT}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response.json());
}
