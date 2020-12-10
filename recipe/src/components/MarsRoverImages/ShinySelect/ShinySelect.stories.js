import React from 'react';
import ShinySelect from './ShinySelect';
import{withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'ShinySelect',
    decorators: [withKnobs]
};

export const standard = () => <ShinySelect            
    displayName={text("displayName","")}    
/>;