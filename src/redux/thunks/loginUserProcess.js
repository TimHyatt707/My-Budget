import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials) {
  return (dispatch, getState) => {
    return loginUser(credentials)
      .then(authentication => {
        localStorage.setItem("token", authentication.token);
        return authentication;
      })
      .catch(error => {
        if (error.message === "Invalid username/password") {
          return "Invalid username/password";
        } else {
          return "Login Failed";
        }
      });
  };
}
