import { LngLatBoundsLike, Map } from 'maplibre-gl';

import { Signal } from '@preact/signals';

export type Option = {
  value: any;
  label: string;
  [key: string]: any;
};

export type Options = Option[];

export type StoreType =
  | {
      map: Signal<Map | undefined>;
      introText: Signal<string>;
      bounds: Signal<LngLatBoundsLike>;
    }
  | Record<string, never>;
