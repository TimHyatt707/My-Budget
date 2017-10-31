import getAuth from "./../../api/utils/getAuth";

export default function getAuthenticationProcess() {
  return (dispatch, getState) => {
    const authentication = getAuth();
    const token = authentication.token;
    const userId = authentication.userId;
    if (!token || !userId) {
      return null;
    } else {
      dispatch({ type: "SET_TOKEN", token });
      dispatch({ type: "SET_USER", userId });
      return authentication;
    }
  };
}
