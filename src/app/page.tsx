import Link from 'next/link';
import MapCanvas from '../components/map';
import contact from '../data/contact.json';
import pages from '../data/pages.json';

export default function App() {
  return (
    <div id='app' className='flexible vertical'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  const pagesDiv = pages.map((page, index) => (
    <Link
      key={index}
      href={''}
      style={{
        width: '100%',
        textAlign: 'center',
        borderRight: index < pages.length - 1 ? 'thin solid white' : null,
      }}
    >
      {page}
    </Link>
  ));
  return <div className='flexible space-evenly frame align-items-center'>{pagesDiv}</div>;
}

function Footer() {
  const contactDiv = contact.map((cont, index) => (
    <a key={index} href={cont.value}>
      {cont.label}
    </a>
  ));
  return (
    <div className='flexible justify-content-center frame align-items-center gap'>{contactDiv}</div>
  );
}

function Main() {
  return (
    <div id='main' className='flexible'>
      <MapCanvas />
    </div>
  );
}

function Hero() {
  return <div></div>;
}
