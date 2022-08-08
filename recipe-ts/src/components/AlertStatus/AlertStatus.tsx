import React from 'react'
import styled, { css } from 'styled-components'

type AlertTypes = 'error' | 'success' | 'info' | 'warning'

export interface AlertStatusProps {
  alertType?: AlertTypes
  message?: string | null
}

const backgroundColorMapping = {
  error: css`
    background-color: #f44336;
  `,
  success: css`
    background-color: #4caf50;
  `,
  info: css`
    background-color: #2196f3;
  `,
  warning: css`
    background-color: #ff9800;
  `,
}

const Alert = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
  opacity: 1;
  transition: opacity 0.6s;
  margin-bottom: 15px;
  ${(props: AlertStatusProps) =>
    props.alertType && backgroundColorMapping[props.alertType]}
`

const CloseButton = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &: hover {
    color: black;
  }
`

const AlertStatus: React.FC<AlertStatusProps> = ({
  alertType = 'error',
  message = '',
}) => {
  const handleHideErrorAlert = (event: any) => {
    const divElement = event.target.parentElement as HTMLDivElement
    divElement.style.opacity = '0'
    setTimeout(() => (divElement.style.display = 'none'), 600)
  }

  return message ? (
    <Alert alertType={alertType}>
      <CloseButton onClick={handleHideErrorAlert}>&times;</CloseButton>
      {message}
    </Alert>
  ) : null
}

export default AlertStatus
