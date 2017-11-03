import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials) {
  return (dispatch, getState) => {
    return loginUser(credentials)
      .then(authentication => {
        localStorage.setItem("token", authentication.token);
        localStorage.setItem("userId", authentication.userId);
        dispatch({ type: "LOGIN_USER" });
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
