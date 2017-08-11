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
import { cssModules } from 'bpk-react-utils';
import { BpkSpinner } from 'bpk-component-spinner';

import STYLES from './bpk-image.scss';

const getClassName = cssModules(STYLES);

class BpkBackgroundImage extends React.Component {
  constructor(props) {
    super(props);

    this.onBackgroundImageLoad = this.onBackgroundImageLoad.bind(this);
    this.nowInView = this.nowInView.bind(this);

    this.state = {
      loading: true,
    };

    if (props.inView) {
      this.nowInView();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.inView && newProps.inView) {
      this.nowInView();
    }
  }

  onBackgroundImageLoad() {
    this.setState({
      loading: false,
    });
  }

  nowInView() {
    const trackImage = new Image();
    trackImage.src = this.props.src;
    trackImage.onload = this.onBackgroundImageLoad;
  }

  render() {
    const { title, className, inView, src, style, children, backgroundColour, ...rest } = this.props;

    const classNames = [getClassName('bpk-image')];
    const spinnerClassNames = [getClassName('bpk-image__spinner')];
    const contentClassNames = [getClassName('bpk-image__content]')];

    if (this.state.loading) {
      spinnerClassNames.push(getClassName('bpk-image__spinner--shown'));
      contentClassNames.push(getClassName('bpk-image__content--hidden'));
    } else {
      spinnerClassNames.push(getClassName('bpk-image__spinner--hide'));
      contentClassNames.push(getClassName('bpk-image__content--show'));
    }

    if (className) {
      classNames.push(className);
      contentClassNames.push(className);
    }

    return (
      <div
        style={{ background: backgroundColour, ...style }}
        title={title}
      >
        <div
          className={classNames.join(' ')}
        >
          {
            inView ? (
              <div style={style}>
                <div className={spinnerClassNames.join(' ')}>
                  <BpkSpinner />
                </div>
                <div
                  className={contentClassNames.join(' ')}
                  style={{
                    backgroundImage: this.state.loading ? '' : `url(${src})`,
                    ...style,
                  }}
                  {...rest}
                >
                  {!this.state.loading ?
                    children
                    : (null)}
                </div>
              </div>
            ) : (null)}
        </div>
      </div>
    );
  }
}

BpkBackgroundImage.propTypes = {
  backgroundColour: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inView: PropTypes.bool,
  src: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string,
};

BpkBackgroundImage.defaultProps = {
  backgroundColour: '#fff',
  children: null,
  className: null,
  inView: true,
  style: null,
  title: '',
};

export default BpkBackgroundImage;

// X support for background:
//      should produce something like `<div style={{ backgroundImage: 'url(/my-image.png)' }}>...</div>`

// T support for img:
//      should produce something like `<Image source={{ uri: '/my/image.png' }}>...</Image>`

// X support for aspect-ratio sizing??

// X passing correct props through to wLL
