import GlobalState from '../state/globalState';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state: GlobalState) => state;

export default connect(mapStateToProps)(Header);