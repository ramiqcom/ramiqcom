import locations from '@/data/locations.json';
import { Context } from '@/module.ts/store';
import { LngLatLike, Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function MapCanvas() {
  const { setMap } = useContext(Context);
  const mapId = 'map';
  const style = `/basemap`;
  const basemapId = 'basemap';
  const searchParams = useSearchParams();

  useEffect(() => {
    const map = new Map({
      container: mapId,
      style: {
        version: 8,
        sources: {
          [basemapId]: {
            type: 'raster',
            url: style,
          },
        },
        layers: [{ type: 'raster', source: basemapId, id: basemapId }],
      },
      zoom: 10,
    });

    map.on('load', () => {
      const page = searchParams.get('page');
      const coords = locations.bennekom.coords;
      map.setCenter(coords as LngLatLike);
    });

    setMap(map);
  }, []);

  useEffect(() => {});

  return <div id={mapId}></div>;
}
