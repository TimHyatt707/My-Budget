import env from "../env";

export default function updateCategory(id, changes, token) {
  return fetch(`${env.API_BASE_URL}/categories/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(changes)
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        category: record.name,
        limit: record.limit
      };
    });
}
