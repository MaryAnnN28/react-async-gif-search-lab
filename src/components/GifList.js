import React from 'react'

// GifList is a presentational component (Meaning written as functional components).  It receives data from its props and renders html given the input data. 
// It can render a top level <ul> with each gif as an <li>

function GifList(props) {
   let giphyArray = props.gifs.map((giphyObj) => <li><img src={giphyObj.images.original.url} alt=""/></li>)

   console.log("giphy: ", giphyArray)
   return (
      <ul>
         {giphyArray}
      </ul>
   )

}

export default GifList