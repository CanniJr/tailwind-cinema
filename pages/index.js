import Head from 'next/head'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Results from '../Components/Results'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tailwind Cinema</title>
      </Head>
      
      <Header />

      <Nav />
      <Results />
    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  
}