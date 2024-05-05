import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function MapCanvas() {
  const page = useSearchParams().get('page');
  const mapId = 'map';
  const style = `https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json?api_key=${process.env.NEXT_PUBLIC_STADIA_KEY}`;

  useEffect(() => {
    const map = new Map({
      container: mapId,
      zoom: 4,
      center: [5.6, 52],
      style: style,
    });
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return <div id={mapId}></div>;
}
