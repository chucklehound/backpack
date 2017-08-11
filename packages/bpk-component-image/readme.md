# bpk-component-image

> Backpack image component.

## Installation

```sh
npm install bpk-component-image --save-dev
```

## BpkImage Usage

```js
import React from 'react';
import BpkImage, { withLazyLoading } from 'bpk-component-image';

const LazyLoadedImage = withLazyLoading(BpkImage, document);

export default () => (
  <LazyLoadedImage
    altText="Cycle Path"
    title="Cycle Path"
    backgroundColour="#001f3f"
    style={{ width: 444, height: 304 }}
    src="https://farm6.staticflickr.com/5773/29799912714_254c2042b8_o_d.jpg"
  />
);
```

## BpkBackgroundImage Usage

```js
import React from 'react';
import { BpkBackgroundImage, withLazyLoading } from 'bpk-component-image';
import BpkText from 'bpk-component-text';

const LazyLoadedBackgroundImage = withLazyLoading(BpkBackgroundImage, document);

export default () => (
  <LazyLoadedBackgroundImage
    title="Bulgaria"
    backgroundColour="#001f3f"
    style={{ width: 518, height: 346, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}
    src="https://farm2.staticflickr.com/1536/24355528994_83ac7bfe64_o_d.jpg"
  >
    <div style={{ opacity: 0.5, marginLeft: 35, paddingTop: 25 }}>
      <BpkText tagName="h2" textStyle="lg">
        Some Content Here...
      </BpkText>
    </div>
  </LazyLoadedBackgroundImage >,
);
```

## BpkImage Props

| Property         | PropType  | Required | Default Value       |
| ---------------- | --------- | -------- | ------------------- |
| altText          | string    | false    | ''                  |
| backgroundColour | string    | false    | '#fff'              |
| className        | string    | false    | null                |
| inView           | bool      | false    | true                |
| src              | string    | true     | -                   |
| style            | object    | false    | null                |
| title            | title     | false    | ''                  |

## BpkBackgroundImage Props

| Property         | PropType  | Required | Default Value       |
| ---------------- | --------- | -------- | ------------------- |
| backgroundColour | string    | false    | '#fff'              |
| children         | node      | false    | null                |
| className        | string    | false    | null                |
| inView           | bool      | false    | true                |
| src              | string    | true     | -                   |
| style            | object    | false    | null                |
| title            | title     | false    | ''                  |
