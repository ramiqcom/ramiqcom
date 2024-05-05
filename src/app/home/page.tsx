import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '../../components/loading';
import Main from '../../components/main';
import contact from '../../data/contact.json';
import pages from '../../data/pages.json';

export default function App() {
  return (
    <div id='app' className='flexible vertical'>
      <Header />
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
      <Footer />
    </div>
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
    <div id='footer' className='flexible justify-content-center frame align-items-center gap'>
      {contactDiv}
    </div>
  );
}
