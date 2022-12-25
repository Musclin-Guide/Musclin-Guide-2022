import { Story, Meta } from '@storybook/react';
import styles from '@components/CareerInput/CareerInput.module.css';
import { addFigmaToken } from '@utils/addFigmaToken';
import { CareerInput } from '@components/CareerInput/CareerInput';

import {
  ListNumber,
  ListNumber2,
  empty,
} from '@components/CareerInput/CareerInput';
import clsx from 'clsx';

export default {
  title: 'Components/CareerInput',
  component: CareerInput,
} as Meta;

const Template: Story = (args) => {
  return (
    <CareerInput
      List={args.List}
      formName={args.formName}
      selectName={args.selectName}
      className={args.className}
      text={args.text}
      disabled={args.disabled}
    ></CareerInput>
  );
};

export const Primary = Template.bind({});
Primary.storyName = 'Month';
Primary.args = {
  disabled: false,
  List: ListNumber,
  formName: 'form',
  selectName: 'name',
  className: clsx(
    styles.inputCommon,
    styles.inputNormalSize,
    'Primaryfocus__test'
  ),
  text: '개월',
};

export const Second = Template.bind({});
Second.storyName = 'Year';
Second.args = {
  disabled: false,
  List: ListNumber2,
  formName: 'form',
  selectName: 'name',
  className: clsx(
    styles.inputCommon,
    styles.inputWideSize,
    'Primaryfocus__test'
  ),
  text: '년',
};

export const CareerInputVariationStory = () => {
  return (
    <>
      <div className="bg-slate-200 h-16 justify-center inline-flex gap-2">
        <CareerInput
          className={clsx(
            styles.inputCommon,
            styles.inputWideSize,
            'Primaryfocus__test'
          )}
          List={ListNumber2}
          text={'년'}
        ></CareerInput>
        <CareerInput
          className={clsx(
            styles.inputCommon,
            styles.inputNormalSize,
            'Primaryfocus__test'
          )}
          List={ListNumber}
          text={'월'}
        ></CareerInput>
        <CareerInput
          className={clsx(
            styles.inputCommon,
            styles.inputNormalSize,
            'Primaryfocus__test'
          )}
          List={ListNumber}
          text={'일'}
        ></CareerInput>
      </div>

      <div className="bg-slate-200 mt-4 w-36 h-16 justify-center flex gap-2">
        <CareerInput
          className={clsx(
            styles.inputCommon,
            styles.inputNormalSize,
            'Primaryfocus__test'
          )}
          List={ListNumber}
          text={'년'}
        ></CareerInput>
        <CareerInput
          className={clsx(
            styles.inputCommon,
            styles.inputNormalSize,
            'Primaryfocus__test'
          )}
          List={ListNumber}
          text={'개월'}
        ></CareerInput>
      </div>
    </>
  );
};

addFigmaToken(
  Primary,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=171%3A12289&t=oMNZVR84ApyTJzQW-4'
);
