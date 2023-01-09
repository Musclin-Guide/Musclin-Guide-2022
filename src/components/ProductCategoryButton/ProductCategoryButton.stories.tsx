import { Story, Meta } from '@storybook/react';
import { ProductCategoryButton } from '@components/ProductCategoryButton/ProductCategoryButton';

export default {
  title: 'Components/ProductCategoryButton',
  component: ProductCategoryButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ProductCategoryButton listName={args.listName} />
);

export const Primary = Template.bind({});
Primary.storyName = 'Category';
Primary.args = {
  listName: '성분',
};
