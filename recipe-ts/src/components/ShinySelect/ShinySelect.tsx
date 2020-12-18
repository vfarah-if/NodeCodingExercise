import { HandlerFunction } from '@storybook/addon-actions';
import React, { Fragment } from 'react';
import './style/index.css';

interface GroupOptionDetails {
	options: Array<OptionDetail>;
	[propName: string]: Array<OptionDetail>;
}

export interface OptionDetail {
	group?: string;
	value: string;
	text?: string;
}

export interface ShinySelectProps  {
	label?: string;
	value: string;
    optionsList: Array<OptionDetail>;
    onChange?: HandlerFunction
}

const OPTIONS_PROPERTY = 'options';

const ShinySelect: React.FC<ShinySelectProps> = ({
	label,
	value = '',
    optionsList,
	...rest
}) => {
	const createOptionElements = (
		options: Array<OptionDetail>
	): Array<JSX.Element> => {
		return options.map((option, index) => (
			<option key={option.value || index} value={option.value}>
				{option.text || option.value}
			</option>
		));
	};

	const createOptionGroupElement = (
		groupName: string,
		groupOptions: Array<OptionDetail>
	): JSX.Element => {
		return (
			<optgroup key={groupName} label={groupName}>
				{createOptionElements(groupOptions)}
			</optgroup>
		);
	};

	const generateSelectOptions = () => {
		const groupByGroupOrOptions = optionsList.reduce(
			(groupOptionDetails: GroupOptionDetails, option: OptionDetail) => {
				if (option.group) {
					if (!groupOptionDetails.hasOwnProperty(option.group)) {
						groupOptionDetails[option.group] = new Array<OptionDetail>();
					}
					groupOptionDetails[option.group].push(option);
				} else {
					if (!groupOptionDetails.hasOwnProperty(OPTIONS_PROPERTY)) {
						groupOptionDetails[OPTIONS_PROPERTY] = new Array<OptionDetail>();
					}
					groupOptionDetails[OPTIONS_PROPERTY].push(option);
				}
				return groupOptionDetails;
			},
			{} as GroupOptionDetails
		);

		let optionResults = Array<JSX.Element>();
		let groupResults = Array<JSX.Element>();
		for (const optionName in groupByGroupOrOptions) {
			if (optionName === 'options') {
				optionResults = createOptionElements(
					groupByGroupOrOptions.options
				);
			} else if (groupByGroupOrOptions.hasOwnProperty(optionName)) {
				const groupOptions = groupByGroupOrOptions[optionName];
				groupResults.push(
					createOptionGroupElement(optionName, groupOptions)
				);
			}
		}
		return [...optionResults, ...groupResults];
	};

	return (
		<label>
			{label}
			<select className="select-css" value={value} {...rest}>
				<Fragment>{generateSelectOptions()}</Fragment>
			</select>
		</label>
	);
};

export default ShinySelect;
