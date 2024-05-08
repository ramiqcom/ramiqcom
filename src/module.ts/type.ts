import { Dispatch, SetStateAction } from 'react';

export type Page = 'home' | 'about' | 'project' | 'career' | 'research';
export type Set<T> = Dispatch<SetStateAction<T>>;
export type GlobalContext = {
  page: Page;
  setPage: Set<Page>;
};
