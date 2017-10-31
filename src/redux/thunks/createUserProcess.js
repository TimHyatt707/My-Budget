import createUser from "./../../api/createUser";

export default function createUserProcess(user, { API_BASE_URL, PORT }) {
  return (dispatch, getState) => {
    return createUser(user, {
      API_BASE_URL,
      PORT
    }).then(user => {
      return user;
    });
  };
}
