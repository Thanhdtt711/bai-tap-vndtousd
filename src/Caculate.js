import React from 'react'
import UsdVnd from './UsdVnd';
import VndUsd from './VndUsd';

export default class Cacuate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }
  renderInput = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div className='container py-5'>
        <div className='m-auto w-50'>
        <UsdVnd onrenderInput={this.renderInput} valueInput={this.state.usd} />
        <VndUsd onrenderInput={this.renderInput} valueInput={this.state.vnd} />
        </div>
      </div>
    );
  }
}