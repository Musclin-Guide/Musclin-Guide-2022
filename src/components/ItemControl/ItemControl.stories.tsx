import { Story, Meta } from '@storybook/react';
import { ItemControl } from '@components/ItemControl/ItemControl';

export default {
  title: 'Components/ItemControl',
  component: ItemControl,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <ItemControl />;

export const Primary = Template.bind({});

export const Variation = () => {
  return (
    <>
      <section className="flex">
        <ItemControl />
        <ItemControl />
      </section>
      <section className="flex">
        <ItemControl />
        <ItemControl />
      </section>
      <section className="flex">
        <ItemControl />
        <ItemControl />
      </section>
    </>
  );
};
