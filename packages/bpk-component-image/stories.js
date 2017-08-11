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
import { storiesOf } from '@storybook/react';

import BpkText from 'bpk-component-text';
import BpkImage, { BpkBackgroundImage } from './index';

storiesOf('bpk-component-image', module)
  .add('Default', () => (
    <BpkImage
      altText="Bike Tyres"
      title="Bike Tyres"
      backgroundColour="#001f3f"
      style={{ width: 518, height: 346 }}
      src="https://farm6.staticflickr.com/5504/30394618876_49a1688500_o_d.jpg"
    />
  ))
  .add('Background Image', () => (
    <BpkBackgroundImage
      title="Bulgaria"
      backgroundColour="#001f3f"
      style={{
        width: 518,
        height: 346,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      src="https://farm2.staticflickr.com/1536/24355528994_83ac7bfe64_o_d.jpg"
    >
      <div
        style={{ opacity: 0.5, marginLeft: 35, paddingTop: 25 }}
      >
        <BpkText
          tagName="h2"
          textStyle="lg"
        >
          Some Content Here...
          </BpkText>
      </div>
    </BpkBackgroundImage>
  ))
  ;
