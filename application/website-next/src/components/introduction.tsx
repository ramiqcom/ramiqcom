import profileImage from '@/image/IMG_20241120_113504.jpg';
import Image from 'next/image';

export default function Introduction() {
  return (
    <div
      id='profile'
      className='flexible vertical align-items-center align-content-center justify-content-center gap'
    >
      <div>Hi! I am Ramadhan</div>
      <Image src={profileImage} width={200} alt='profile_image' />
      <div>
        I am GScience enthusiast who currently works at{' '}
        <a href='https://space4good.com' target='_blank'>
          Space4Good
        </a>{' '}
        as Biomass Remote Sensing Data Scientist.
      </div>
      <div>
        I run a{' '}
        <a href='https://youtube.com/@ramiqcom' target='_blank'>
          Youtube Channel
        </a>{' '}
        tutorials on Google Earth Engine, remote sensing analysis on Python, and geospatial web
        application developement. Visi my{' '}
        <a href='https://github.com/ramiqcom' target='_blank'>
          GitHub
        </a>{' '}
        repository to see my cool and hip projects and codes tutorial
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
