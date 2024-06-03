'use client';

import MapCanvas from './map';
import Panel from './panel';

import contact from '@/data/contact.json';
import pages from '@/data/pages.json';
import { Context } from '@/module.ts/store';
import { Page } from '@/module.ts/type';
import Link from 'next/link';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const states = {
    page,
    setPage,
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
          href={{ query: { page: page.value } }}
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
