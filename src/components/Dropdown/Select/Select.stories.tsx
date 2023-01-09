import { Story, Meta } from '@storybook/react';
import { Select } from '@components/Dropdown/Select/Select';
import select from '@components/Dropdown/Select/Select.module.css';
export default {
  title: 'Components/DropDown/Select',
  component: Select,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <Select {...args} />;

export const SelectShort = Template.bind({});
SelectShort.args = {
  className: select.selectButtonShort,
};

export const SelectLong = Template.bind({});
SelectLong.args = {
  className: select.selectButtonLong,
};
