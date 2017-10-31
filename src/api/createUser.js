export default function createUser(user, { API_BASE_URL, PORT }) {
  return fetch(`${API_BASE_URL}${PORT}/users`, {
    method: "POST",
    body: user
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        id: record.id,
        username: record.username,
        email: record.email
      };
    });
}
