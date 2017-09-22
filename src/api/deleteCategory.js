export default function deleteCategory(Id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/Categories/${Id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json());
}
