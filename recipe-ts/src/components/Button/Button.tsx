import React from 'react'
import styled, { css } from 'styled-components'

type Sizes = 'small' | 'medium' | 'large'

export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: Sizes
  label: string
  onClick?: () => void
  style?: React.CSSProperties
}

const sizeMapping = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props: ButtonProps) =>
    props.primary
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}
  ${(props: ButtonProps) => props.size && sizeMapping[props.size]}
  ${(props: ButtonProps) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  &hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
  }
`

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      label={label}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default Button
