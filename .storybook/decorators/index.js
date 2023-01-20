import { wrapperDecorator } from './wrapper';
import { recoilDecorator } from './recoil';
import { ReactQueryDecorator } from './react-query';
import { StorybookFormDecorator } from './react-hook-form';
const globalDecorator = [
  wrapperDecorator,
  recoilDecorator,
  ReactQueryDecorator,
  StorybookFormDecorator,
];

export default globalDecorator;
