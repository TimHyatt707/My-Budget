import { compose } from "recompose";
import { connect } from "react-redux";
import SignupPage from "./../../components/SignupPage";
import createUserProcess from "./../thunks/createUserProcess";

function mapStateToProps(state, props) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCreateUser: user => dispatch(createUserProcess(user))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(SignupPage);
