import { Story, Meta } from '@storybook/react';
import { Menu } from '@components/Dropdown/Menu/Menu';
import menu from '@components/Dropdown/Menu/Menu.module.css';

export default {
  title: 'Components/Dropdown',
  component: Menu,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Menu addClassName={args.addClassName} className={args.className} />
);

export const MenuItems = Template.bind({});
MenuItems.args = {
  addClassName: menu.menuShapeShadow,
  className: menu.ItemListDefault,
};

export const CreatDropdown = Template.bind({});
CreatDropdown.args = {
  addClassName: '',
  className: menu.ItemListCenter,
};
