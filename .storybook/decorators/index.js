import { wrapperDecorator } from './wrapper';
import { recoilDecorator } from './recoil';

const globalDecorator = [wrapperDecorator, recoilDecorator];

export default globalDecorator;
