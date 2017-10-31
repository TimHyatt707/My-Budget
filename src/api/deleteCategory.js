export default function deleteCategory(id, { API_BASE_URL }, token) {
  return fetch(`${API_BASE_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response.json());
}
