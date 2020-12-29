import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { EmptyDate, DefaultDate } from '../date.stories';
import Date from '../date';

describe('Date tests as defined by stories', () => {
  test('should generate a no time assigned message when nothing assigned', () => {
    const component = render(<EmptyDate />);

    expect(component.container).toMatchSnapshot('EmptyDate');
  });

  test('should generate a default date when assigned all expected values', () => {
    const component = render(
      <DefaultDate dateString={DefaultDate.args.dateString} />
    );

    expect(component.container).toMatchSnapshot('DefaultDate');
  });
});

describe('Date', () => {
  test('should generate a no time assigned message when nothing assigned', () => {
    const component = render(<Date dateString={undefined} />);

    expect(component.container).toMatchSnapshot('EmptyDate');
  });

  test('should generate a default date when assigned all expected values', () => {
    const component = render(
      <Date dateString='2011-10-05T14:48:00.000Z' />
    );

    expect(component.container).toMatchSnapshot('DefaultDate');
  });
});
