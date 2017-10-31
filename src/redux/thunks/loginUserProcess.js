import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials, API_BASE_URL, PORT) {
  return loginUser(credentials, {
    API_BASE_URL,
    PORT
  }).then(authentication => {
    localStorage.setItem("token", authentication.token);
    localStorage.setItem("userId", authentication.userId);
  });
}
