import profileImage from '@/image/20211105_133525.jpg';
import { Context } from '@/module.ts/store';
import Image from 'next/image';
import { useContext } from 'react';

export default function Panel() {
  const { page } = useContext(Context);

  return (
    <div id='panel'>
      <Introduction />
    </div>
  );
}

function Introduction() {
  return (
    <div
      id='profile'
      className='flexible vertical align-items-center align-content-center justify-content-center gap'
    >
      <div>Hi! I am Ramadhan</div>
      <Image src={profileImage} width={200} alt='profile_image' />
      <div>
        I like to learn about geospatial modelling and programming, especially in flood and
        forestry. I also make a tutorial{' '}
        <a href='https://youtube.com/ramiqcom' target='_blank'>
          Youtube Channel
        </a>{' '}
        about it.
      </div>
      <div>
        I play pick-up basketball on afternoon after work, usually in{' '}
        <a
          href='https://www.google.com/maps?ll=51.983358,5.668158&z=14&t=m&hl=en&gl=US&mapclient=embed&q=51%C2%B058%2754.4%22N+5%C2%B040%2704.8%22E+51.981772,+5.667986@51.981772,5.667986'
          target='_blank'
        >
          The Bongerd
        </a>
        , in Wageningen University & Research, close to my home in Bennekom.
      </div>
      <div></div>
    </div>
  );
}
