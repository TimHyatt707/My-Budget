export default function loginUser(credentials, { API_BASE_URL }) {
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: credentials
  })
    .then(response => {
      return response.json();
    })
    .then(record => {
      return {
        token: record.authentication.token,
        userId: record.authentication.userId
      };
    });
}
