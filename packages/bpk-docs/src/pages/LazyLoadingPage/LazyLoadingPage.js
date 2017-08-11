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
import { BpkCode, BpkCodeBlock } from 'bpk-component-code';
import BpkImage, { withLazyLoading } from 'bpk-component-image';
import BpkLink from 'bpk-component-link';
import DocsPageBuilder from './../../components/DocsPageBuilder';
import Heading from './../../components/Heading';
import Paragraph from './../../components/Paragraph';
import CounterWithInViewBehaviour from './CounterWithInViewBehaviour';
import * as ROUTES from './../../constants/routes';

const LazyLoadedCounter = withLazyLoading(CounterWithInViewBehaviour, document);
const LazyLoadedImage = withLazyLoading(BpkImage, document);

const components = [
  {
    id: 'noLazyLoadingCounter',
    title: 'Counters with No Lazy Loading',
    blurb: [
      <Paragraph>
        The component shown below has been created to demonstrate usage of this HOC.
        When <BpkCode>inView</BpkCode> is set true, <BpkCode>CounterWithInViewBehaviour</BpkCode>
        will display the time since being <BpkCode>inView</BpkCode>.
        If we use this component directly then <BpkCode>inView</BpkCode> will always be true,
        and it will count from page load.

        Applying the <BpkCode>withLazyLoading</BpkCode> HOC to the counting components will
        cause them to only have <BpkCode>inView</BpkCode> set true once scrolled into view.
        Other examples can be seen in the <BpkLink href={ROUTES.IMAGES}>Images page</BpkLink>.
      </Paragraph>,
      <BpkCodeBlock>
        {`import { withLazyLoading } from 'bpk-component-image';
import CounterWithInViewBehaviour from './CounterWithInViewBehaviour';

const LazyLoadedCounter = withLazyLoading(CounterWithInViewBehaviour, document);

<CounterWithInViewBehaviour tagName="h1" textStyle="xl" />
<CounterWithInViewBehaviour tagName="h2" textStyle="lg" />
<CounterWithInViewBehaviour tagName="h3" textStyle="base" />
<LazyLoadedCounter tagName="h1" textStyle="xl" />
<LazyLoadedCounter tagName="h2" textStyle="lg" />
<LazyLoadedCounter tagName="h3" textStyle="base" />
`}
      </BpkCodeBlock>,
    ],
    examples: [
      <CounterWithInViewBehaviour tagName="h1" textStyle="xl" />,
      <CounterWithInViewBehaviour tagName="h2" textStyle="lg" />,
      <CounterWithInViewBehaviour tagName="h3" textStyle="base" />,
      <LazyLoadedCounter tagName="h1" textStyle="xl" />,
      <LazyLoadedCounter tagName="h2" textStyle="lg" />,
      <LazyLoadedCounter tagName="h3" textStyle="base" />,
    ],
  },
  {
    id: 'withLazyLoadingImage',
    title: 'Images with Lazy Loading',
    blurb: [
      <Paragraph>
        The <BpkCode>BpkImage</BpkCode> component will only load and render an image
        if <BpkCode>inView</BpkCode> is set to true. Applying the HOC to <BpkCode>BpkImage</BpkCode>
        will therefore prevent unessesary loading of images which are not in view.
        Other examples can be seen in the <BpkLink href={ROUTES.IMAGES}>Images page</BpkLink>.
      </Paragraph>,
      <BpkCodeBlock>
        {`import BpkImage, { withLazyLoading } from 'bpk-component-image';

const LazyLoadedImage = withLazyLoading(BpkImage, document);

<LazyLoadedImage
  altText="Red Leaves"
  title="Red Leaves"
  backgroundColour="#001f3f"
  style={{ width: 477, height: 301 }}
  src="https://farm8.staticflickr.com/7319/28747014882_8f1dc945fa_o_d.jpg"
/>
`}
      </BpkCodeBlock>,
    ],
    examples: [
      <LazyLoadedImage
        altText="Red Leaves"
        title="Red Leaves"
        backgroundColour="#001f3f"
        style={{ width: 477, height: 301 }}
        src="https://farm8.staticflickr.com/7319/28747014882_8f1dc945fa_o_d.jpg"
      />,
    ],
  },
];

const LazyLoadingPage = () => <DocsPageBuilder
  title="Lazy loading"
  blurb={[
    <Paragraph>
      <BpkCode>withLazyLoading</BpkCode> is a HOC which adds an <BpkCode>inView</BpkCode> prop to components.
      This boolean can be used to determine if the component has been brought into view within a users browser window.
      By restricting the behaviour of a given component when <BpkCode>inView</BpkCode> is false,
      we can reduce the work required to serve a page.
    </Paragraph>,
    <Heading level="h2" >
      Installation
    </Heading>,
    <Paragraph>
      The <BpkCode>withLazyLoading</BpkCode> HOC is provided in the <BpkCode>bpk-component-image</BpkCode> package.
      See <BpkLink href={ROUTES.IMAGES}>Images</BpkLink> for installation instructions.
    </Paragraph>,
  ]}
  components={components}
/>;

export default LazyLoadingPage;
