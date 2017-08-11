/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import React from 'react';
import BpkText from 'bpk-component-text';

class CounterWithInViewBehaviour extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = {
      secondsElapsed: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.props.inView) {
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }
  }

  render() {
    return (
      <div>
        <BpkText {...this.props} >
          Time elapsed since first seen: {this.state.secondsElapsed} seconds.
        </BpkText>
      </div>
    );
  }
}

CounterWithInViewBehaviour.propTypes = {
  inView: PropTypes.bool,
};

CounterWithInViewBehaviour.defaultProps = {
  inView: true,
};

export default CounterWithInViewBehaviour;
