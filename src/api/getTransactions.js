import env from "../env";

export default function getTransactions(id, token) {
  return fetch(`${env.API_BASE_URL}/users/${id}/transactions?`, {
    method: "GET",
    headers: {
      authorization: `${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(records => {
      return records.map(record => {
        return {
          id: record.id,
          amountSpent: record.amount,
          category: record.category,
          name: record.name,
          timestamp: record.created_at
        };
      });
    })
    .catch(error => {
      return error;
    });
}
