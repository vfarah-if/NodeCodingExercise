import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './style/index.css';

const ShinySelect = ({ displayName, value, optionsList, ...rest }) => {
	const createOptionElements = (options) => {
		return options.map((option, index) => (
			<option key={index} value={option.value}>
				{option.text || option.value}
			</option>
		));
	};

	const createOptionGroupElement = (groupName, groupOptions) => {
		return (
			<optgroup label={groupName}>
				{createOptionElements(groupOptions)}
			</optgroup>
		);
	};

	const generateSelectOptions = () => {
		const groupByOptions = optionsList.reduce((acc, option) => {
			if (option.group) {
				if (!acc.hasOwnProperty(option.group)) {
					acc[option.group] = [];
				}
				acc[option.group].push(option);
			} else {
				if (!acc.hasOwnProperty('options')) {
					acc['options'] = [];
				}
				acc['options'].push(option);
			}
			return acc;
		}, {});

		if (groupByOptions.options) {
			return createOptionElements(groupByOptions.options);
		} else {
			const groupResult = [];
			for (const groupName in groupByOptions) {
				if (groupByOptions.hasOwnProperty(groupName)) {
					const groupOptions = groupByOptions[groupName];
					groupResult.push(
						createOptionGroupElement(groupName, groupOptions)
					);
				}
			}
			return groupResult;
		}
	};

	return (
		<label>
			{displayName}
			<select className="select-css" value={value} {...rest}>
				<Fragment>{generateSelectOptions()}</Fragment>
			</select>
		</label>
	);
};

ShinySelect.propTypes = {
	displayName: PropTypes.string,
	value: PropTypes.string,
	optionsList: PropTypes.arrayOf(
		PropTypes.shape({
			group: PropTypes.string,
			value: PropTypes.string.isRequired,
			text: PropTypes.string,
		})
	).isRequired,
};

ShinySelect.defaultProps = {
	value: '',
};

export default ShinySelect;
