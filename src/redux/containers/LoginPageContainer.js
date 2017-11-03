import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import LoginPage from "./../../components/LoginPage";
import loginUserProcess from "./../thunks/loginUserProcess";
import getAuthenticationProcess from "./../thunks/getAuthenticationProcess";

function mapStateToProps(state, props) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onLoginUser: credentials => dispatch(loginUserProcess(credentials))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  async componentDidMount() {
    await this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(LoginPage);
