import env from "../env";

export default function createTransaction(id, object, token) {
  return fetch(`${env.API_BASE_URL}/users/${id}/transactions`, {
    method: "POST",
    headers: {
      Authorization: `${token}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(object)
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
    })
    .catch(error => {
      return error.message;
    });
}
