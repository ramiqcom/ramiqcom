import { Context } from '@/module.ts/store';
import { point } from '@turf/turf';
import { LngLatLike, Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useContext, useEffect, useState } from 'react';

export default function MapCanvas() {
  const { page } = useContext(Context);
  const [map, setMap] = useState<Map>();
  const mapId = 'map';
  const style = `https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json?api_key=${process.env.NEXT_PUBLIC_STADIA_KEY}`;

  useEffect(() => {
    const map = new Map({
      container: mapId,
      style: style,
      zoom: 6,
    });
    setMap(map);
  }, []);

  useEffect(() => {
    if (map && page) {
      map.on('load', () => {
        switch (page) {
          case 'home': {
            const coord = [5.670208, 52.005848];
            const pointData = point(coord);
            map.addSource('point', {
              data: pointData,
              type: 'geojson',
            });
            map.addLayer({
              source: 'point',
              id: 'point',
              type: 'circle',
              paint: {
                'circle-color': 'red',
              },
            });
            map.setCenter(coord as LngLatLike);
            break;
          }
        }
      });
    }
  }, [map, page]);

  return <div id={mapId}></div>;
}
