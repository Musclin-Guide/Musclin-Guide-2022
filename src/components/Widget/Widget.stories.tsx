import { Story, Meta } from '@storybook/react';
import { Widget } from '@components/Widget/Widget';

export default {
  title: 'Components/Widget',
  component: Widget,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <Widget />;

export const WidgetPrimary = Template.bind({});
