import Head from 'next/head'
import Header from './Components/Header';
export default function Home() {
  return (
    <div className=''>
      <Head>
         <title>Instagram</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>

    </div>
    


  
  );
}
