import { RecoilRoot } from 'recoil';

export const recoilDecorator = (Story) => (
  <RecoilRoot>
    <Story />
  </RecoilRoot>
);
