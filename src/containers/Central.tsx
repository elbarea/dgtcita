import GlobalState from "../state/globalState";
import { connect } from "react-redux";
import Central from "../components/Central";

const mapStateToProps = (state: GlobalState) => state;

export default connect(mapStateToProps)(Central);
