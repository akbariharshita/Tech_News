import React from 'react'
import { useGlobalContext } from '../context'

const Pageintation = () => {
   const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext();

  return (
    <>
     <div className='pagination-btn'>
      <button onClick={() => getPrevPage()}>PREV</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={() => getNextPage()}>NEXT</button>
        </div> 
    </>
  )
}

export default Pageintation
