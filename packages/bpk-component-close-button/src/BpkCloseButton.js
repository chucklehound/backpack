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
import CloseIcon from 'bpk-component-icon/sm/close';
import { withButtonAlignment } from 'bpk-component-icon';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-close-button.scss';

const getClassName = cssModules(STYLES);

const CloseButtonIcon = withButtonAlignment(CloseIcon);

const BpkCloseButton = (props) => {
  const classNames = [getClassName('bpk-close-button')];
  const { label, onClick, className, ...rest } = props;

  if (className) { classNames.push(className); }

  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      aria-label={label}
      className={classNames.join(' ')}
      {...rest}
    >
      <CloseButtonIcon className={getClassName('bpk-close-button__icon')} />
    </button>
  );
};

BpkCloseButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

BpkCloseButton.defaultProps = {
  className: null,
};

export default BpkCloseButton;
