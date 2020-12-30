import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Layout from '..';

describe('Layout', () => {
  test('should generate a home page with expected home layout', () => {
    const component = render(
      <Layout isHome={true}>
        <section>
          <p>
            Having worked with Next JS without doing any tutorials, I thought I
            would go back and take nothign for granted.
          </p>
        </section>
      </Layout>
    );

    expect(component.container).toMatchSnapshot('HomeLayout');
  });

  test('should generate a detail different to home layout', () => {
    const component = render(
      <Layout isHome={false}>
        <section>
          <p>
            Having worked with Next JS without doing any tutorials, I thought I
            would go back and take nothign for granted.
          </p>
        </section>
      </Layout>
    );

    expect(component.container).toMatchSnapshot('NotHomeLayout');
  });
});
