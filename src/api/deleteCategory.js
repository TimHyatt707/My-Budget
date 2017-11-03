import env from "../env";

export default function deleteCategory(id, token) {
  return fetch(`${env.API_BASE_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    }
  });
}
