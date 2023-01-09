import { wrapperDecorator } from './wrapper';
import { recoilDecorator } from './recoil';
import { ReactQueryDecorator } from './react-query';

const globalDecorator = [
  wrapperDecorator,
  recoilDecorator,
  ReactQueryDecorator,
];

export default globalDecorator;
