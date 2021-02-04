import React, { Component } from 'react' 
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

// GifListContainer is a "container" - place in class 

class GifListContainer extends Component {
  
   state = {
      gifs: []
   }


   componentDidMount() {
      this.fetchGiphys()
   }

   fetchGiphys = (term = "dogs") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=iPX3sUQ9ovBls7Ri2XHoGIV2p8fWi3Z4&rating=g&limit=15`)
         .then(res => res.json())
         .then(gifData => this.setState({
            gifs: gifData.data
         }))
      console.log(this.fetchGiphys)
   }

   submitHandler = (searchWord) => {
      this.fetchGiphys(searchWord)
   }

   render() {
      return (
         <div>
            <GifSearch />
            <GifList gifs={this.state.gifs}/>
         </div>

      )
   }
}


export default GifListContainer; 