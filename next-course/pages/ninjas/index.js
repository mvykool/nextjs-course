import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

/**exporting the function */
export const getStaticProps = async () => {

    /**fetching the data using async await */
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    /**get data and transform it to JSON */
    const data = await res.json();

    /**return props that we can use with our components and that way, be able to use in the template*/
    return {
        props: { ninjas: data}
    }

    /**once this is done, simply destructure it and pass it as prop, then simply map thru the data*/
}

const index = ({ ninjas }) => {
  return (
    <>
     <Head>
    <title>MK | Ninjas</title>
    <meta name='keywords' content="nijas" />
   </Head>
   <h1>Ninjas</h1>
   {ninjas.map((ninja) => (
    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
        <h3>{ninja.name}</h3>
    </Link>
   ))}
    </>
  )
}

export default index