'use client';

import MapCanvas from './map';
import Panel from './panel';

export default function Main() {
  return (
    <div id='main' className='flexible'>
      <Panel />
      <MapCanvas />
    </div>
  );
}
