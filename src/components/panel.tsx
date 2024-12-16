import { useSearchParams } from 'next/navigation';
import About from './about';
import Introduction from './introduction';

export default function Panel() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const sectionDict = {
    home: <Introduction />,
    about: <About />,
  };

  return <div id='panel'>{sectionDict[page]}</div>;
}
