export default function getTransactions(id, { API_BASE_URL, PORT }, token) {
  return fetch(`${API_BASE_URL}${PORT}/users/${id}/transactions?`, {
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
          amountSpent: record.amount,
          category: record.category_id,
          name: record.name,
          timestamp: record.created_at
        };
      });
    });
}
