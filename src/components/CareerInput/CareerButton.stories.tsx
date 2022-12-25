import { Story, Meta } from '@storybook/react';
import styles from '@components/CareerInput/CareerButton.module.css';
import { CareerButton } from '@components/CareerInput/CareerButton';
import { FiX, FiCheck, FiCheckSquare, FiCalendar } from 'react-icons/fi';
import clsx from 'clsx';

export default {
  title: 'Components/CareerButton',
  component: CareerButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return (
    <CareerButton
      type={args.type}
      title={args.title}
      className={args.className}
      icon={args.icon}
      onClick={args.onClick}
    ></CareerButton>
  );
};

export const FixOrDeleteButton = Template.bind({});
FixOrDeleteButton.storyName = 'Fix';
FixOrDeleteButton.args = {
  type: 'button',
  title: '나가기',
  className: '',
  icon: <FiX className={styles.icon} />,
};

export const CheckButton = Template.bind({});
CheckButton.storyName = 'Check';
CheckButton.args = {
  type: 'button',
  title: '체크하기',
  className: 'bg-red-500',
  icon: <FiCheck className={styles.icon} />,
};

export const EditButton = Template.bind({});
EditButton.storyName = 'Edit';
EditButton.args = {
  type: 'button',
  title: '수정하기',
  className: '',
  icon: <FiCheckSquare className={styles.icon} />,
};

export const CalenderButton = Template.bind({});
CalenderButton.storyName = 'Calender edit';
CalenderButton.args = {
  type: 'button',
  title: '날짜 수정',
  className: '',
  icon: <FiCalendar className={styles.icon} />,
};

export const CareerButtonVariationStory = () => {
  return (
    <>
      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <CareerButton
          type="button"
          title="나가기"
          icon={<FiX className={styles.icon} />}
        ></CareerButton>
        <CareerButton
          type="button"
          title="체크하기"
          icon={<FiCheck className={styles.icon} />}
        ></CareerButton>
      </div>
      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <CareerButton
          type="button"
          title="체크하기"
          icon={<FiCheck className={styles.icon} />}
        ></CareerButton>
        <CareerButton
          type="button"
          title="나가기"
          icon={<FiX className={styles.icon} />}
        ></CareerButton>
      </div>

      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <CareerButton
          type="button"
          title="수정하기"
          icon={<FiCheckSquare className={styles.icon} />}
        ></CareerButton>
        <CareerButton
          type="button"
          title="날짜 수정"
          icon={<FiCalendar className={styles.icon} />}
        ></CareerButton>
      </div>
    </>
  );
};

CareerButtonVariationStory.storyName = 'Variations';
