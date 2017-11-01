import env from "../env";

export default function deleteTransaction(id, userId, token) {
  return fetch(`${env.API_BASE_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authenticated: `${userId}`,
      Authorization: `${token}`
    }
  }).then(response => response.json());
}
