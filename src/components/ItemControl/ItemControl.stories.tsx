import { Story, Meta } from '@storybook/react';
import { ItemControl } from '@components/ItemControl/ItemControl';

export default {
  title: 'Components/ItemControl',
  component: ItemControl,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <ItemControl
    imgWrapper={'Row'}
    listWrapper={'Row'}
    count={0}
    href={''}
    src={''}
  />
);

export const Primary = Template.bind({});

export const Variation = () => {
  return (
    <>
      <section className="flex">
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
      </section>
      <section className="flex">
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
      </section>
      <section className="flex">
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
        <ItemControl
          imgWrapper={'Row'}
          listWrapper={'Row'}
          count={0}
          href={''}
          src={''}
        />
      </section>
    </>
  );
};
