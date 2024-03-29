import { Story, Meta } from '@storybook/react';
import { Button_Test } from '@components/Button_test/Button_test';
import { addFigmaToken } from '@utils/addFigmaToken';
export default {
  title: 'Components/Button',
  component: Button_Test,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button_Test
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Button_Test>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  className: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Button',
};

export const Focus = Template.bind({});
Focus.storyName = 'ButtonFocus';
Focus.args = {
  className: '',
  variant: 'focus',
  color: 'normal',
  size: 'medium',
  disabled: false,
  text: 'Button',
};

addFigmaToken(
  Focus,
  'https://www.figma.com/file/9Q9d6I31A1lMp11UMLZjA1/wireFrames(1st-Cycle)?node-id=121%3A11279&t=9DlsQXxvM06MZwwp-4'
);

export const FocusVisible = Template.bind({});
FocusVisible.storyName = 'ButtonFocusVisible';
FocusVisible.args = {
  className: '',
  variant: 'focus',
  color: 'focusVisible',
  size: 'medium',
  disabled: false,
  text: 'Button',
};

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <div className="bg-outline-icon">icon color</div>
      <div className="bg-outline-default">neutral100</div>
      <div className="text-state-positive">positive - #22C55E</div>
      <div className="text-state-negative">negative -#CC0000</div>
      <div className="text-state-accent">accent - #186faf</div>
      <div className="text-state-updated">updated - #EF4444</div>
      <div className="text-state-warning">waring - #FACC15</div>
      <h1 className="text-2xl font-semibold mb-2">Buttons</h1>

      <h2 className="text-xl mt-6">Contained Buttons</h2>
      <div className="mt-1">
        <Button_Test>Default</Button_Test>
        <Button_Test className="ml-2" color="primary">
          Primary
        </Button_Test>
        <Button_Test className="ml-2" color="secondary">
          Secondary
        </Button_Test>
        <Button_Test className="ml-2" disabled>
          Disabled
        </Button_Test>
      </div>

      <h2 className="text-xl mt-6">Outlined Buttons</h2>
      <div className="mt-1">
        <Button_Test variant="outlined">Default</Button_Test>
        <Button_Test className="ml-2" variant="outlined" color="primary">
          Primary
        </Button_Test>
        <Button_Test className="ml-2" variant="outlined" color="secondary">
          Secondary
        </Button_Test>
        <Button_Test className="ml-2" variant="outlined" disabled>
          Disabled
        </Button_Test>
      </div>

      <h2 className="text-xl mt-6">Sizes</h2>
      <div className="mt-1">
        <Button_Test variant="contained" color="primary" size="small">
          Small
        </Button_Test>
        <Button_Test
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </Button_Test>
        <Button_Test
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </Button_Test>
      </div>
      <div className="mt-2">
        <Button_Test variant="outlined" color="primary" size="small">
          Small
        </Button_Test>
        <Button_Test
          className="ml-2"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </Button_Test>
        <Button_Test
          className="ml-2"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </Button_Test>
      </div>

      <h2 className="text-xl mt-6">Link Buttons</h2>
      <div className="mt-2">
        <a className="btn-link" href="https://amazon.com">
          Amazon
        </a>
        <a className="ml-2 btn-link" href="https://apple.com">
          Apple
        </a>
        <a className="ml-2 btn-link" href="https://store.google.com">
          Google
        </a>
      </div>
    </div>
  );
};
ButtonVariationsStory.storyName = 'Button Variations';
