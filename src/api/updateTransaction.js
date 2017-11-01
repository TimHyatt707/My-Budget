import env from "../env";

export default function updateTransaction(id, changes, token) {
  return fetch(`${env.API_BASE_URL}/transactions/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(changes)
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        category: record.category,
        amountSpent: record.amount,
        name: record.name,
        timestamp: record.created_at
      };
    });
}
