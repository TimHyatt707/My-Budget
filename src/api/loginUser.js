export default function loginUser(credentials, { API_BASE_URL, PORT }) {
  return fetch(`${API_BASE_URL}${PORT}/login`, {
    method: "POST",
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
