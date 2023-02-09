import { useEffect } from 'react';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
