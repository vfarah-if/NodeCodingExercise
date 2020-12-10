
import React, {Fragment} from 'react';
import AlertStatus from './AlertStatus';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Component/AlertStatus',
    component: AlertStatus
};

const AlertStatusTemplate = (args) => (
    <Fragment>
        <AlertStatus {...args} />
    </Fragment>
);

export const AlertErrorStory = AlertStatusTemplate.bind({});
AlertErrorStory.args = {
    alertType: 'error',
    message: 'Error Message'
}

export const AlertSuccessStory = AlertStatusTemplate.bind({});
AlertSuccessStory.args = {
    alertType: 'success',
    message: 'Success messsage'
}

export const AlertInfoStory = AlertStatusTemplate.bind({});
AlertInfoStory.args = {
    alertType: 'info',
    message: 'Info messsage'
}

export const AlertWarningStory = AlertStatusTemplate.bind({});
AlertWarningStory.args = {
    alertType: 'warning',
    message: 'Warning messsage'
}
