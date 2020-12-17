import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from '../List';

describe('List', () => {
	const item1 = 'TODO 1: Add the first item';
	const item2 = 'TODO 2: Add the second item';
	
	test('should add one item into the list', async () => {
		const component = render(<List />);
		const input = await component.findByPlaceholderText('Enter new item');
		editValue(input, item1);

		await submitAddButton(component);

		const listItem = await component.findByText(item1);
		expect(listItem).toMatchSnapshot();	
    });
    
    test('should clear the list after adding another item', async () => {
		const component = render(<List />);
		const input = await component.findByPlaceholderText('Enter new item');		
		
		editValue(input, item1);		
		await submitAddButton(component);
		expect(input.value).toBe('');

		editValue(input, item2);	
		await submitAddButton(component);
		expect(input.value).toBe('');

		const listItem = await component.findByText(item2);
		expect(listItem).toMatchSnapshot();	
	});
});

async function submitAddButton(component) {
	const form = await component.findByTestId('form');
	expect(form).toBeDefined();
	fireEvent.submit(form);
}

function editValue(input, item1) {
	expect(input).toBeDefined();
	fireEvent.change(input, {
		target: { value: item1 },
	});
	expect(input.value).toBe(item1);
}

