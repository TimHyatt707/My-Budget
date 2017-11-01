import loginUser from "./../../api/loginUser";

export default function loginUserProcess(credentials) {
  return (dispatch, getState) => {
    return loginUser(credentials)
      .then(authentication => {
        localStorage.setItem("token", authentication.token);
        localStorage.setItem("userId", authentication.userId);
        dispatch({ type: "LOGIN_USER" });
      })
      .catch(error => {
        return error;
      });
  };
}
