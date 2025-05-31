import { Head } from '$fresh/runtime.ts';

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className='page ac-center ai-center jc-center'>
        <div class='flex vertical ac-center ai-center jc-center'>
          <img
            class='my-6'
            src='/logo.svg'
            width='128'
            height='128'
            alt='the Fresh logo: a sliced lemon dripping with juice'
          />
          <h1 class='text-4xl font-bold'>404 - Page not found</h1>
          <p class='my-4'>The page you were looking for doesn't exist.</p>
          <a href='/' class='underline'>
            Go back home
          </a>
        </div>
      </div>
    </>
  );
}
