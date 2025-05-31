import { Map } from 'maplibre-gl';
import { Dispatch, SetStateAction } from 'react';

export type Page = { label: string; value: string };
export type SetState<T> = Dispatch<SetStateAction<T>>;
export type GlobalContext = {
  page: Page;
  map: Map;
  setMap: SetState<Map>;
};
