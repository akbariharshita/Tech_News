import React from 'react'
import { useGlobalContext } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <>
      <h1>Loading...</h1>
    </>
  }

  return (
    <>
      <div className='stories-div d-flex flex-column justify-content-center align-items-center gap-3'>
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost
          return (
              <div className='card' key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span> {author} </span> | <span>{num_comments}</span> comments
                </p>
                <div className='card-button d-flex flex-row justify-content-between'>
                  <a href={url} target='_blank' className="card-link">
                    Read More
                  </a>
                  <a href='#' className="card-link text-danger" onClick={() =>removePost(objectID)}>Remove</a>
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
}

export default Stories;
