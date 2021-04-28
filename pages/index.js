import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import reqs from '../utilities/reqs'

export default function Home({ results }) {

  return (
    <div >
      <Head>
        <title>Tailwind Cinema</title>
      </Head>
      
      <Header />

      <Nav />
      <Results results={ results }/>
    </div>
  )
}


// server-side render the external API as props that is used in the Home function
export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${reqs[genre]?.url || reqs.Trending.url}`)
  .then((resp) => resp.json());

  return {
    props: {
      results: request.results,
    }
  }
}