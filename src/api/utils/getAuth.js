import env from "../../env"

export default async function getAuth() {
  try {
    const token = localStorage.getItem("token") || null
    return fetch()
    return { token };
  } catch() {
    return;
  }
}
