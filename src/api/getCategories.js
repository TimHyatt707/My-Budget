import env from "../env";

export default function getCategories(id, token) {
  return fetch(`${env.API_BASE_URL}/users/${id}/categories?`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(records => {
      return records.map(record => {
        return {
          id: record.id,
          category: record.name,
          limit: record.limit
        };
      });
    })
    .catch(error => {
      return error.message;
    });
}
