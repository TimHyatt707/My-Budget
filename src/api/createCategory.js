import env from "../env";

export default function createCategory(id, object, token) {
  return fetch(`${env.API_BASE_URL}/users/${id}/categories`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(object)
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
