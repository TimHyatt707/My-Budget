export default function deleteCategory(Id) {
  return fetch(
    `https://api.airtable.com/v0/app4N49jXo9XVuKeq/Categories/${Id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer keyZjFgCqHqPR1F8o'
      }
    }
  ).then(response => response.json());
}
