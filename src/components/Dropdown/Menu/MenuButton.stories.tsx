import { Story, Meta } from '@storybook/react';
import { MenuButton } from '@components/Dropdown/Menu/MenuButton';
import menuButton from '@components/Dropdown/Menu/MenuButton.module.css';
import clsx from 'clsx';

export default {
  title: 'Components/Dropdown',
  component: MenuButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <MenuButton {...args}></MenuButton>;

export const CreateDropdownButton = Template.bind({});
CreateDropdownButton.args = {
  className: clsx(
    menuButton.MenuButtonDefault,
    menuButton.writeButton,
    'primaryFocusVisible'
  ),
};
export const ImageTagButton = Template.bind({});
ImageTagButton.args = {
  className: clsx(
    menuButton.MenuButtonDefault,
    menuButton.addItemButton,
    'primaryFocusVisible'
  ),
};