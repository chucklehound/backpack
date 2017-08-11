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

class BpkImage extends React.Component {
  constructor(props) {
    super(props);

    this.onImageLoad = this.onImageLoad.bind(this);

    this.state = {
      loading: true,
    };
  }

  onImageLoad() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { backgroundColour, inView, style, altText, src, className, title, ...rest } = this.props;

    const classNames = [getClassName('bpk-image')];
    const imgClassNames = [getClassName('bpk-image__image]')];
    const spinnerClassNames = [getClassName('bpk-image__spinner')];

    if (this.state.loading) {
      spinnerClassNames.push(getClassName('bpk-image__spinner--shown'));
      imgClassNames.push(getClassName('bpk-image__image--hidden'));
    } else {
      spinnerClassNames.push(getClassName('bpk-image__spinner--hide'));
      imgClassNames.push(getClassName('bpk-image__image--show'));
    }

    if (this.className) {
      classNames.push(this.className);
      imgClassNames.push(this.className);
    }

    return (
      <div
        style={{ background: backgroundColour, ...style }}
      >
        <div
          className={classNames.join(' ')}
        >
          {
            inView ? (
              <div>
                <div className={spinnerClassNames.join(' ')}>
                  <BpkSpinner />
                </div>
                <img
                  className={imgClassNames.join(' ')}
                  style={style}
                  alt={altText}
                  title={title}
                  src={src}
                  onLoad={this.onImageLoad}
                  onError={this.onImageLoad} // TODO Handle Error
                  {...rest}
                />
              </div>
            ) : (null)
          }
        </div>
      </div >
    );
  }
}


BpkImage.propTypes = {
  altText: PropTypes.string,
  backgroundColour: PropTypes.string,
  className: PropTypes.string,
  inView: PropTypes.bool,
  src: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string,
};

BpkImage.defaultProps = {
  altText: '',
  backgroundColour: '#fff',
  className: null,
  inView: true,
  style: null,
  title: '',
};

export default BpkImage;

// X support for aspect-ratio sizing??
