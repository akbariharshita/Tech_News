import React from 'react'
import { useGlobalContext } from '../context'
import "../App.css"

const Search = () => {
const {query, searchPost} = useGlobalContext();

  return (
    <>
     <div>
      <h1 className='Heading'>Thapa Technical Tech Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type='text' placeholder='search here' value={query} onChange={(e) => searchPost(e.target.value)}/>
        </div>
      </form>
      </div> 
    </>
  )
}

export default Search
