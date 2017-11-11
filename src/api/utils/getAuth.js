import env from "../../env";

export default function getAuth() {
  try {
    const token = localStorage.getItem("token") || null;
    return fetch(`${env.API_BASE_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(authentication => {
        return { id: authentication.id, token: token };
      });
  } catch (error) {
    return;
  }
}
