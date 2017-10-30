import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import SignupPage from "./../../components/SignupPage";

function mapStateToProps(state, props) {}

function mapDispatchToProps(dispatch, ownProps) {}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(SignupPage);
