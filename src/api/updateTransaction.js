export default function updateTransaction(
  id,
  changes,
  { API_BASE_URL },
  token
) {
  return fetch(`${API_BASE_URL}/transactions/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
      "Content-type": "application/json"
    },
    body: changes
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
