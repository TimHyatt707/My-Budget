export default function deleteTransaction(Id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/transactions/${Id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json());
}
