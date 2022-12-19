import { ListDummy } from '@atoms/dummy__test';
import { atom } from 'recoil';

export const menuState = atom({
  key: 'menuState',
  default: ListDummy,
});
