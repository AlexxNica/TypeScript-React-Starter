import * as enzyme from 'enzyme';
import { StoreState } from '../types/index'
import { enthusiasm } from './index';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions/index'

it('increment enthusiasm with 1', () => {
  const state: StoreState = { enthusiasmLevel: 1, languageName: 'Typescript' };
  var newState = enthusiasm(state, incrementEnthusiasm());
  expect(newState.enthusiasmLevel).toEqual(2);
});

it('decrement enthusiasm with 1', () => {
    const state: StoreState = { enthusiasmLevel: 2, languageName: 'Typescript' };
    var newState = enthusiasm(state, decrementEnthusiasm());
    expect(newState.enthusiasmLevel).toEqual(1);
  });

it('prevent enthusiasm decrement below 1', () => {
    const state: StoreState = { enthusiasmLevel: 1, languageName: 'Typescript' };
    var newState = enthusiasm(state, decrementEnthusiasm());
    expect(newState.enthusiasmLevel).toEqual(1);
  });
