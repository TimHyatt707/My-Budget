import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import SignupPage from "./../../components/SignupPage";
import createUserProcess from "./../thunks/createUserProcess";
import getAuthenticationProcess from "./../thunks/getAuthenticationProcess";

function mapStateToProps(state, props) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onCreateUser: user => dispatch(createUserProcess(user))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  async componentDidMount() {
    await this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(SignupPage);
