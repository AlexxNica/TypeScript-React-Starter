import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export interface DispatchProps {
  onDecrement?: () => object;
  onIncrement?: () => object;
}

export class Hello extends React.Component<Props & DispatchProps, object> {
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
      </div>
    );  
  }

  private getExclamations = (exclamations: number): string => 
    Array(exclamations + 1).join('!')
}

export default Hello;
