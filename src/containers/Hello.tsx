import { Hello } from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

function mapStateToProps({ enthusiasmLevel, languageName }: StoreState): Hello.Props {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): Hello.DispatchProps {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);