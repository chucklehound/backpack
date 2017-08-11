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

import React from 'react';

export default function withLazyLoading(Component, document) {
  return class Wll extends React.Component {
    constructor() {
      super();

      this.placeholderReference = `div_placeholder_${Math.ceil(Math.random() * 100000)}`;

      this.setInView = this.setInView.bind(this);
      this.removeEventListeners = this.removeEventListeners.bind(this);
      this.checkInView = this.checkInView.bind(this);
      this.isInViewPort = this.isInViewPort.bind(this);

      this.state = {
        inView: false,
      };
    }

    componentDidMount() {
      document.addEventListener('scroll', this.checkInView, false);
      // call checkInView immediately incase the
      // component is already in view prior to scrolling
      this.checkInView();
    }

    setInView() {
      const self = this;
      self.setState({
        inView: true,
      });
      this.removeEventListeners();
    }

    componentWillUnmount() {
      this.removeEventListeners();
    }

    removeEventListeners() {
      document.removeEventListener('scroll', this.checkInView, false);
    }

    checkInView() {
      if (this.isInViewPort()) {
        this.setInView();
      }
    }

    isInViewPort() {
      const hocPlaceholder = document.getElementById(this.placeholderReference);
      const rect = hocPlaceholder.getBoundingClientRect();

      const viewPortHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
      const viewPortWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);

      return (
        rect.bottom >= (0) &&
        rect.right >= (0) &&
        rect.top < (viewPortHeight) &&
        rect.left < (viewPortWidth)
      );
    }

    render() {
      return (
        <div
          id={this.placeholderReference}
        >
          <Component
            inView={this.state.inView}
            {...this.props}
          />
        </div>
      );
    }
  };
}
