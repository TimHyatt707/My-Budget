import env from "../env";

export default function createUser(user) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        username: record.username,
        email: record.email
      };
    })
    .catch(error => console.log(error));
}
