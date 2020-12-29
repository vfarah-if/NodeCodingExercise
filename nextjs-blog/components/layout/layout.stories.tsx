import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Layout, { LayoutProps } from './layout';
export default { title: 'Component/Layout', component: Layout } as Meta;

const LayoutTemplate: Story<LayoutProps> = (args: LayoutProps) => (
  <>
    <Layout {...args}>
      <section>
        <p>
          Having worked with Next JS without doing any tutorials, I thought I
          would go back and take nothign for granted.
        </p>
      </section>
    </Layout>
  </>
);

export const HomeLayout = LayoutTemplate.bind({});
HomeLayout.args = {
  isHome: true,
};

export const OtherLayout = LayoutTemplate.bind({});
OtherLayout.args = {
    isHome: false,
};
