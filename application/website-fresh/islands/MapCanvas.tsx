import { Store } from '@/modules/store.ts';
import { useSignal, useSignalEffect } from '@preact/signals';
import maplibregl from 'maplibre-gl';
import { useContext, useEffect } from 'preact/hooks';

export default function MapCanvas() {
  const mapDiv = 'map';
  const { map, bounds } = useContext(Store);
  const mapLoaded = useSignal(false);
  const basemapId = 'basemap';

  useEffect(() => {
    const mapContainer = new maplibregl.Map({
      container: mapDiv,
      bounds: bounds.value,
      style: {
        version: 8,
        sources: {
          [basemapId]: {
            type: 'raster',
            url: '/basemap',
            tileSize: 256,
          },
        },
        layers: [{ type: 'raster', source: basemapId, id: basemapId }],
      },
    });

    mapContainer.on('load', () => (mapLoaded.value = true));
    mapContainer.on('move', (e) => console.log(e.target.getBounds()));

    map.value = mapContainer;
  }, []);

  useSignalEffect(() => {
    if (map.value && mapLoaded.value) {
      map.value.fitBounds(bounds.value);
    }
  });

  return <div id={mapDiv} />;
}
