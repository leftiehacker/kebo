import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import MainFX from './components/MainFX';
import Logo from './components/Logo';

import './styles/index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detune: 0,
      gain: 500,
      distortion: 0,
      reverb: 0.01
    };
  }

  onDetune = (amount) => {
    this.setState({ detune: amount });
  }

  onGain = (amount) => {
    this.setState({ gain: amount });
  }

  onDistortion = (amount) => {
    this.setState({ distortion: amount });
  }

  onReverb = (amount) => {
    this.setState({ reverb: amount });
  }

  render() {
    return (
      <div className="app-container">
        <Logo name='kebo' />
        <div className={"sound-panel"}>
          <Keyboard 
            detune={this.state.detune}
            gain={this.state.gain}
            distortion={this.state.distortion}
            reverb={this.state.reverb}
          />
          <MainFX 
            detune={this.state.detune}
            gain={this.state.gain}
            distortion={this.state.distortion}
            reverb={this.state.reverb}
            onDetune={this.onDetune}
            onGain={this.onGain}
            onDistortion={this.onDistortion}
            onReverb={this.onReverb}
          />
        </div>
      </div>
    );
  }
}
