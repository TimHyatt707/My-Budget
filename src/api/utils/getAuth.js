export default function getAuth() {
  const token = localStorage.getItem("token") || null;
  const authenticatedUserId = localStorage.getItem("userId") || null;
  return { token, authenticatedUserId };
}
