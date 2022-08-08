import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import AlertStatus, { AlertStatusProps } from './AlertStatus'

export default {
  title: 'Component/AlertStatus',
  component: AlertStatus,
} as Meta

const AlertStatusTemplate: Story<AlertStatusProps> = args => (
  <>
    <AlertStatus {...args} />
  </>
)

export const InvisibleAlert = AlertStatusTemplate.bind({})
InvisibleAlert.args = {}

const error = new Error('Error Message')
export const AlertDefaultWithMessage = AlertStatusTemplate.bind({})
AlertDefaultWithMessage.args = {
  message: error.message,
}

export const AlertError = AlertStatusTemplate.bind({})
AlertError.args = {
  alertType: 'error',
  message: 'Error Message',
}

export const AlertSuccess = AlertStatusTemplate.bind({})
AlertSuccess.args = {
  alertType: 'success',
  message: 'Success messsage',
}

export const AlertInfo = AlertStatusTemplate.bind({})
AlertInfo.args = {
  alertType: 'info',
  message: 'Info messsage',
}

export const AlertWarning = AlertStatusTemplate.bind({})
AlertWarning.args = {
  alertType: 'warning',
  message: 'Warning messsage',
}
