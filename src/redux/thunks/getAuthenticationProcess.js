import getAuth from "./../../api/utils/getAuth";

export default function getAuthenticationProcess() {
  return (dispatch, getState) => {
    let token = localStorage.getItem("token");
    if (!token) {
      return null;
    } else {
      return getAuth().then(authentication => {
        const token = authentication.token;
        const userId = authentication.id;
        dispatch({ type: "SET_TOKEN", token });
        dispatch({ type: "SET_ID", userId });
        return authentication;
      });
    }
  };
}
