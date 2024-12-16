'use client';

import MapCanvas from './map';
import Panel from './panel';

import contact from '@/data/contact.json';
import pages from '@/data/pages.json';
import { Context } from '@/module.ts/store';
import { Map } from 'maplibre-gl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function App() {
  const router = useRouter();
  const page = pages[0];

  useEffect(() => {
    router.push(`/?page=${page.value}`);
  }, []);

  const [map, setMap] = useState<Map>();

  const states = {
    page,
    map,
    setMap,
  };

  return (
    <Context.Provider value={states}>
      <Header />
      <div id='main' className='flexible'>
        <Panel />
        <MapCanvas />
      </div>
      <Footer />
    </Context.Provider>
  );
}

function Header() {
  return (
    <div id='header' className='flexible space-evenly frame align-items-center'>
      {pages.map((page, index) => (
        <Link
          key={index}
          href={{
            query: { page: page.value, subpage: page.value == 'about' ? 'childhood' : undefined },
          }}
          style={{
            width: '100%',
            textAlign: 'center',
            borderRight: index < pages.length - 1 ? 'thin solid white' : null,
          }}
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
}

function Footer() {
  const contactDiv = contact.map((cont, index) => (
    <a key={index} href={cont.value}>
      {cont.label}
    </a>
  ));
  return (
    <div
      id='footer'
      className='flexible align-content-center align-items-center justify-content-center gap'
    >
      {contactDiv}
    </div>
  );
}
