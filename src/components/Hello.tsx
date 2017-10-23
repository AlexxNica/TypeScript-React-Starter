import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Hello.css';

export namespace Hello {
  export interface Props {
    name: string;
    enthusiasmLevel?: number;
  }

  export interface DispatchProps {
    onDecrement?: () => object;
    onIncrement?: () => object;
  }
}

export class Hello extends React.Component<Hello.Props & Hello.DispatchProps, object> {
  render() {
    const {enthusiasmLevel = 1} = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
        
    return (
      <div className="hello">
        <div className="greeting">
          Hello {this.props.name + this.getExclamations(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>
        </div>
        <div className="nav">
          <NavLink to={'/test/' + enthusiasmLevel.toString()}>Click to go to TEST</NavLink>
        </div>
      </div>
    );  
  }

  private getExclamations = (exclamations: number): string => 
    Array(exclamations + 1).join('!')
}
