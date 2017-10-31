export default function deleteTransaction(id, { API_BASE_URL, PORT }, token) {
  return fetch(`${API_BASE_URL}${PORT}/transactions/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response.json());
}
