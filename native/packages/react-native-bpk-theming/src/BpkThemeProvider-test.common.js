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

import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BpkThemeProvider from './BpkThemeProvider';

const commonTests = () => {
  jest.mock('Image', () => 'Image');

  describe('BpkThemeProvider', () => {
    it('should render correctly', () => {
      const tree = renderer.create(
        <BpkThemeProvider theme={{ color: 'white' }}>
          <Text>Lorem ipsum</Text>
        </BpkThemeProvider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should error when theme is not provided', () => {
      expect(() => renderer.create(
        <BpkThemeProvider>
          <Text>Lorem ipsum</Text>
        </BpkThemeProvider>,
      )).toThrow(TypeError);
    });
  });
};

export default commonTests;
