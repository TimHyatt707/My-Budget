import { compose } from "recompose";
import { connect } from "react-redux";
import env from "./../../env";
import SignupPage from "./../../components/SignupPage";
import createUserProcess from "./../thunks/createUserProcess";

function mapStateToProps(state, props) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCreateUser: user =>
      dispatch(
        createUserProcess(user, {
          API_BASE_URL: env.API_BASE_URL,
          PORT: env.PORT
        })
      )
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(SignupPage);
