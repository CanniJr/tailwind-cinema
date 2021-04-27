import Head from 'next/head'
import Header from '../Components/Header'
import Nav from '../Components/Nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tailwind Cinema</title>
      </Head>
      
      <Header />

      <Nav />
    </div>
  )
}
