import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import {
	OptionGroups,
	OptionsAndGroupsMixed,
	SimpleOptions,
	ValuesOnly,
} from '../ShinySelect.stories';

describe('ShinySelect', () => {
	test('should create option groups', () => {
		const { container } = render(
			<OptionGroups
				label={OptionGroups.args?.label}
                optionsList={OptionGroups.args?.optionsList || []}
                value={OptionGroups.args?.value || ''}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create options and groups mixed', () => {
		const { container } = render(
			<OptionsAndGroupsMixed
				label={OptionsAndGroupsMixed.args?.label}
                optionsList={OptionsAndGroupsMixed.args?.optionsList || []}
                value={OptionsAndGroupsMixed.args?.value || ''}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create options only', () => {
		const { container } = render(
			<SimpleOptions
				label={SimpleOptions.args?.label}
                optionsList={SimpleOptions.args?.optionsList || []}
                value={SimpleOptions.args?.value || ''}
			/>
		);

		expect(container).toMatchSnapshot();
    });
    
    test('should create values only', () => {
		const { container } = render(
			<ValuesOnly
				label={ValuesOnly.args?.label}
                optionsList={ValuesOnly.args?.optionsList || []}
                value={ValuesOnly.args?.value || ''}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
