import { compose } from "recompose";
import { connect } from "react-redux";
import LoginPage from "./../../components/LoginPage";
import loginUserProcess from "./../thunks/loginUserProcess";

function mapStateToProps(state, props) {
  return {
    token: state.login
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLoginUser: credentials => dispatch(loginUserProcess(credentials))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(LoginPage);
