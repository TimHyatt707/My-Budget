export default function createTransaction(id, object, { API_BASE_URL }, token) {
  return fetch(`${API_BASE_URL}/users/${id}/transactions`, {
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
        category: record.category_id,
        amountSpent: record.amount,
        name: record.name,
        timestamp: record.created_at
      };
    });
}
