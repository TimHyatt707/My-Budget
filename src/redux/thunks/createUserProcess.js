import createUser from "./../../api/createUser";

export default function createUserProcess(user) {
  return (dispatch, getState) => {
    return createUser(user)
      .then(user => {
        return user;
      })
      .catch(error => {
        if (error.message === "Invalid email") {
          return "Invalid email";
        } else return "Something went wrong";
      });
  };
}
