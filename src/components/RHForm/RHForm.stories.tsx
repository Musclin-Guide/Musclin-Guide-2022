import { RHForm } from '@components/RHForm/RHForm';
import { RHInput } from '@components/RHInput/RHInput';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

interface ITestForm {
  test: string;
}

export default {
  title: 'Components/RHForm',
  component: RHForm,
  argTypes: {
    onValid: action('onValid'),
    onReset: action('onReset'),
    onInvalid: action('onInvalid'),
  },
} as ComponentMeta<typeof RHForm<ITestForm>>;

const Template: ComponentStory<typeof RHForm<ITestForm>> = (args) => (
  <RHForm<ITestForm> {...args} />
);
export const Input과_함께_사용하기 = Template.bind({});
Input과_함께_사용하기.args = {
  children: (
    <>
      <RHInput<ITestForm> name="test" />
      <div className="flex gap-4 mt-4">
        <button type="submit" className="bg-blue-200 p-2">
          서브밋
        </button>
        <button type="reset" className="bg-red-200 p-2">
          리셋
        </button>
      </div>
    </>
  ),
};
