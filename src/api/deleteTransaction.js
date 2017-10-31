export default function deleteTransaction(id, { API_BASE_URL }, token) {
  return fetch(`${API_BASE_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response.json());
}
