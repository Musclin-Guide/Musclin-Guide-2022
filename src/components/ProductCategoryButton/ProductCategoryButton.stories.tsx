import { Story, Meta } from '@storybook/react';
import { ProductCategoryButton } from '@components/ProductCategoryButton/ProductCategoryButton';

export default {
  title: 'Components/ProductCategoryButton',
  component: ProductCategoryButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ProductCategoryButton
    listName={args.listName}
    listchildName={args.listchildName}
  />
);

export const Primary = Template.bind({});
Primary.storyName = 'Category';
Primary.args = {
  listName: '성분',
  listchildName: '크레아틴',
};
