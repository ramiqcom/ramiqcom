import { createContext } from 'preact';
import { StoreType } from './type.ts';
export const Store = createContext<StoreType>({});
