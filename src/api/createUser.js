import env from "../env";

export default function createUser(user) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error("Invalid email");
      } else throw new Error("Internal Server Error");
    })
    .then(record => {
      return {
        id: record.id,
        username: record.username,
        email: record.email
      };
    })
    .catch(error => {
      return error.message;
    });
}
