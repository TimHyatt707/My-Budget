export default function deleteTransaction(Id) {
  return fetch(
    `https://api.airtable.com/v0/appjAkSe9KeAO6vMv/transactions/${Id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer keyZjFgCqHqPR1F8o'
      }
    }
  ).then(response => response.json());
}
