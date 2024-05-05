'use client';

import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect } from 'react';

export default function MapCanvas() {
  const mapId = 'map';
  const style = `https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json?api_key=${process.env.NEXT_PUBLIC_STADIA_KEY}`;

  useEffect(() => {
    const map = new Map({
      container: mapId,
      zoom: 4,
      center: [119, 0],
      style: style,
    });
  }, []);

  return <div id={mapId}></div>;
}
