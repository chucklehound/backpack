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

/* eslint-disable import/first */
import BpkModalDialog from './BpkModalDialog';
/* eslint-enable */

describe('BpkModalDialog', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <BpkModalDialog
        id="my-modal"
        title="Modal title"
        onClose={() => null}
        closeLabel="Close"
        getApplicationElement={() => null}
      >
        Modal content
      </BpkModalDialog>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when it has a className', () => {
    const tree = renderer.create(
      <BpkModalDialog
        id="my-modal"
        className="my-classname"
        title="Modal title"
        onClose={() => null}
        closeLabel="Close"
        getApplicationElement={() => null}
      >
        Modal content
      </BpkModalDialog>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
