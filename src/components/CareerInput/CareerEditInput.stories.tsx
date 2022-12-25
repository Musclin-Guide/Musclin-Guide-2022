import { Story, Meta } from '@storybook/react';
import styles from '@components/CareerInput/CareerInput.module.css';
import { addFigmaToken } from '@utils/addFigmaToken';
import { CareerEditInput } from '@components/CareerInput/CareerEditInput';

import {
  ListNumber,
  ListNumber2,
  empty,
} from '@components/CareerInput/CareerInput';
import clsx from 'clsx';

export default {
  title: 'Components/EditInput',
  component: CareerEditInput,
} as Meta;

const Template: Story = (args) => {
  return <CareerEditInput disabled={args.disabled}></CareerEditInput>;
};

export const Primary = Template.bind({});
Primary.storyName = 'CareerEditInput';
