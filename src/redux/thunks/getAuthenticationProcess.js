import getAuth from "./../../api/utils/getAuth";

export default function getAuthenticationProcess() {
  return (dispatch, getState) => {
    return getAuth().then(authentication => {
      const token = authentication.token;
      const userId = authentication.id;
      if (!token) {
        return null;
      } else {
        dispatch({ type: "SET_TOKEN", token });
        dispatch({ type: "SET_ID", userId });
        return authentication;
      }
    });
  };
}
