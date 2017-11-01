import env from "../env";

export default function loginUser(credentials) {
  return fetch(`${env.API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      return {
        token: record.authentication.token,
        userId: record.authentication.userId
      };
    });
}
