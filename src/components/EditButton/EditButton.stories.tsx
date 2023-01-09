import { Story, Meta } from '@storybook/react';
import styles from '@components/EditButton/EditButton.module.css';
import { EditButton } from '@components/EditButton/EditButton';
import { FiX, FiCheck, FiCheckSquare, FiCalendar } from 'react-icons/fi';
import clsx from 'clsx';

export default {
  title: 'Components/EditButton',
  component: EditButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return (
    <EditButton
      type={args.type}
      title={args.title}
      className={args.className}
      icon={args.icon}
      onClick={args.onClick}
    ></EditButton>
  );
};

export const FixOrDeleteTypeButton = Template.bind({});
FixOrDeleteTypeButton.storyName = 'Fix';
FixOrDeleteTypeButton.args = {
  type: 'button',
  title: '나가기',
  className: '',
  icon: <FiX className={styles.icon} />,
};

export const CheckTypeButton = Template.bind({});
CheckTypeButton.storyName = 'Career Check';
CheckTypeButton.args = {
  type: 'button',
  title: '체크하기',
  className: 'bg-red-500',
  icon: <FiCheck className={styles.icon} />,
};

export const EditTypeButton = Template.bind({});
EditTypeButton.storyName = 'Career Edit';
EditTypeButton.args = {
  type: 'button',
  title: '수정하기',
  className: '',
  icon: <FiCheckSquare className={styles.icon} />,
};

export const CalenderTypeButton = Template.bind({});
CalenderTypeButton.storyName = 'Calender edit';
CalenderTypeButton.args = {
  type: 'button',
  title: '날짜 수정',
  className: '',
  icon: <FiCalendar className={styles.icon} />,
};

export const CareerButtonVariationStory = () => {
  return (
    <>
      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <EditButton
          type="button"
          title="나가기"
          icon={<FiX className={styles.icon} />}
        ></EditButton>
        <EditButton
          type="button"
          title="체크하기"
          icon={<FiCheck className={styles.icon} />}
        ></EditButton>
      </div>
      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <EditButton
          type="button"
          title="체크하기"
          icon={<FiCheck className={styles.icon} />}
        ></EditButton>
        <EditButton
          type="button"
          title="나가기"
          icon={<FiX className={styles.icon} />}
        ></EditButton>
      </div>

      <div className={clsx(styles.sampleBackGround, styles.wrapper)}>
        <EditButton
          type="button"
          title="수정하기"
          icon={<FiCheckSquare className={styles.icon} />}
        ></EditButton>
        <EditButton
          type="button"
          title="날짜 수정"
          icon={<FiCalendar className={styles.icon} />}
        ></EditButton>
      </div>
    </>
  );
};

CareerButtonVariationStory.storyName = 'Variations';
