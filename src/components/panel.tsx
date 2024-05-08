import { useContext } from 'react';
import { Context } from '../module.ts/store';

export default function Panel() {
  const { page } = useContext(Context);

  return <div id='panel'></div>;
}
