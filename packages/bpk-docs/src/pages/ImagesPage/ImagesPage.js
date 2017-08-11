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
import BpkImage, { BpkBackgroundImage, withLazyLoading } from 'bpk-component-image';
import { BpkCode } from 'bpk-component-code';
import BpkText from 'bpk-component-text';
import BpkLink from 'bpk-component-link';

import imagesReadme from 'bpk-component-image/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import Paragraph from './../../components/Paragraph';
import * as ROUTES from './../../constants/routes';

const LazyLoadedImage = withLazyLoading(BpkImage, document);
const LazyLoadedBackgroundImage = withLazyLoading(BpkBackgroundImage, document);

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <BpkImage
        altText="Cycle Path"
        title="Cycle Path"
        backgroundColour="#001f3f"
        style={{ width: 444, height: 304 }}
        src="https://farm6.staticflickr.com/5773/29799912714_254c2042b8_o_d.jpg"
      />,
      <BpkImage
        altText="Bike Tyres"
        title="Bike Tyres"
        backgroundColour="#001f3f"
        style={{ width: 518, height: 346 }}
        src="https://farm6.staticflickr.com/5504/30394618876_49a1688500_o_d.jpg"
      />,
      <BpkImage
        altText="Unhealthy Stuff"
        title="Unhealthy Stuff"
        backgroundColour="#001f3f"
        style={{ width: 518, height: 317 }}
        src="https://farm6.staticflickr.com/5667/29560994894_f049faf94d_o_d.jpg"
      />,
    ],
  },
  {
    id: 'withLazyLoading',
    title: 'Use with Lazy Loading',
    examples: [
      <LazyLoadedImage
        altText="Cake"
        title="Cake"
        backgroundColour="#001f3f"
        style={{ width: 518, height: 346 }}
        src="https://farm9.staticflickr.com/8571/29333729493_b43ca85745_o_d.jpg"
      />,
      <LazyLoadedImage
        altText="Red Leaves"
        title="Red Leaves"
        backgroundColour="#001f3f"
        style={{ width: 477, height: 301 }}
        src="https://farm8.staticflickr.com/7319/28747014882_8f1dc945fa_o_d.jpg"
      />,
      <LazyLoadedImage
        altText="Robin"
        title="Robin"
        backgroundColour="#001f3f"
        style={{ width: 518, height: 346 }}
        src="https://farm8.staticflickr.com/7438/27144219836_d235f17950_o_d.jpg"
      />,
    ],
  },
  {
    id: 'backgroundImage',
    title: 'Background Image',
    examples: [
      <LazyLoadedBackgroundImage
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
          <BpkCode>
            Some more content...
          </BpkCode>
        </div>
      </LazyLoadedBackgroundImage >,
    ],
  },
];


const ImagesPage = () => <DocsPageBuilder
  title="Images"
  blurb={[
    <Paragraph>
      The <BpkCode>BpkImage</BpkCode> component displays a given image, showing a loading spinner until loaded.
      The component responds to the <BpkCode>inView</BpkCode> prop (which is true by default), meaning that
      it can be used with the <BpkLink href={ROUTES.LAZYLOADING}>Lazy Loading HOC</BpkLink>. Such use will prevent
      large image files from being loaded when outside the user`s view.
      In addition, a <BpkCode>BpkBackgroundImage</BpkCode> component allows an image to be used as the background for
      other content. The child content of a <BpkCode>BpkBackgroundImage</BpkCode> will only be displayed once the image
      has loaded. Like the <BpkCode>BpkImage</BpkCode> component, the <BpkLink href={ROUTES.LAZYLOADING}>Lazy Loading
      HOC</BpkLink> can be applied to <BpkCode>BpkBackgroundImage</BpkCode> to prevent loading when out of view.
    </Paragraph>,
  ]}
  components={components}
  readme={imagesReadme}
/>;

export default ImagesPage;
