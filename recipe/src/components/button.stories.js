import React from 'react';
import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <Button {...args} />;
  
  export const StoryOne = Template.bind({});
  StoryOne.args = {
    primary: true,
    displayName: 'Button',
  };
  
  export const StoryTwo = Template.bind({});
  StoryTwo.args = {
    displayName: 'Button',
  };
  
  export const StoryThree = Template.bind({});
  StoryThree.args = {
    size: 'large',
    displayName: 'Button',
  };
  
  export const StoryFour = Template.bind({});
  StoryFour.args = {
    size: 'small',
    displayName: 'Button',    
  };

  export const SmallWithClick = Template.bind({});
  SmallWithClick.args = {
    size: 'small',
    displayName: 'Button',    
    onClick: 'alert("test")'
  };
  