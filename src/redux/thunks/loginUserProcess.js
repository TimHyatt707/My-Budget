import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials, API_BASE_URL) {
  return loginUser(credentials, {
    API_BASE_URL
  }).then(authentication => {
    localStorage.setItem("token", authentication.token);
    localStorage.setItem("userId", authentication.userId);
  });
}
