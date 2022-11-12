import React from 'react'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    /**create params, get the needed params from the array using map */

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
    
}

/**now we need to get the getStaticProps just like we initially did to render the array, we need to pass a key word named "context" in the getStaticProps */


export const getStaticProps = async (context) =>{
   /**get the params from the context, the id for this example */
   const id = context.params.id;

   /**now we just need to fet the url and add the id of each element, that way next can create a individiual file for each id */
   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
   /**get data and transform it to JSON */
   const data = await res.json();

   /**now return the props but only one array, as we already mapped thru the elements, no map needed in the template */

   return{
    props: { ninja: data }
   }
}


/**now pass the prop to the function */

const Details = ({ ninja }) => {
  return (
    <div>
        <h1>Details</h1>
        <p>{ninja.name}</p>
        <p>{ninja.email}</p>
        <p>{ninja.address.city }</p>
    </div>
    
  )
}

export default Details