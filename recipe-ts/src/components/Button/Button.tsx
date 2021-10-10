import React from 'react';
import './style/index.css';

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
	style?: React.CSSProperties;
}
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary';
	return (
		<button
			type="button"
			className={[
				'storybook-button',
				`storybook-button--${size}`,
				mode,
			].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};

export default Button;