import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function About() {
  const searchParams = useSearchParams();
  const subpage = searchParams.get('subpage');
  const path = usePathname();
  const router = useRouter();

  const subPageDict = {
    childhood: <Childhood />,
  };

  return (
    <div className='flexible vertical gap'>
      <div className='flexible vertical small-gap'>{subPageDict[subpage]}</div>
      <div className='flexible wide'>
        <button disabled={subpage == 'childhood'} style={{ width: '5vh' }}>
          {'<'}
        </button>
        <button
          onClick={() => router.push(`${path}?page=about?subpage=teenage`)}
          style={{ width: '5vh' }}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

function Childhood() {
  return (
    <div className='flexible vertical small-gap'>
      <div className='title'>~ My Childhood ~</div>I was born and spend my first 6 years of my life
      in Jambi, a middle-sized city in Sumatera
    </div>
  );
}
