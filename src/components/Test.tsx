import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';

export namespace Test {
  export interface RouteProps {
    title: string;
  }

  export interface Props extends RouteComponentProps<RouteProps> {  
    language: string;
  }
}

export class Test extends React.Component<Test.Props> {
  render() {
    return (
      <div className="nav">
        <NavLink to="/">{this.props.language} '{this.props.match.params.title}'</NavLink>
      </div>
    );  
  }
}
