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
			(acc: GroupOptionDetails, option: OptionDetail) => {
				if (option.group) {
					if (!acc.hasOwnProperty(option.group)) {
						acc[option.group] = new Array<OptionDetail>();
					}
					acc[option.group].push(option);
				} else {
					if (!acc.hasOwnProperty(OPTIONS_PROPERTY)) {
						acc[OPTIONS_PROPERTY] = new Array<OptionDetail>();
					}
					acc[OPTIONS_PROPERTY].push(option);
				}
				return acc;
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
