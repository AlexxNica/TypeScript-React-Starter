import { Test } from '../components/Test';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';

const mapStateToProps = (
    state: StoreState, 
    ownProps: Test.Props): Test.Props => {
    return { ...ownProps, language: state.languageName };
  };
  
export default connect(mapStateToProps)(Test);
