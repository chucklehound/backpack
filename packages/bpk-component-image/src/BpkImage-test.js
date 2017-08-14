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
import renderer from 'react-test-renderer';
import BpkImage from './BpkImage';

describe('BpkImage', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <BpkImage
        altText="Cycle Path"
        title="Cycle Path"
        style={{ width: 444, height: 304 }}
        src="https://farm6.staticflickr.com/5773/29799912714_254c2042b8_o_d.jpg"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set background correctly', () => {
    const tree = renderer.create(
      <BpkImage
        altText="Cycle Path"
        title="Cycle Path"
        backgroundColour="#001f3f"
        style={{ width: 444, height: 304 }}
        src="https://farm6.staticflickr.com/5773/29799912714_254c2042b8_o_d.jpg"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
