import React from 'react'

// the GifSearch component will render a form that receives the user input for the Giphy search. 

// the text input should be a controlled component that stores the value of the input in its component sate and renders the DOM accordingly. 

// GifSearch should receive a callback prop with the value of the text input. It is this callback function, defined in GifListContainer that will actually query the API. 

class GifSearch extends React.Component {

   state = {
      searchWord: ""
   }

   submitHandler = (event) => {
      event.preventDefault()
      this.props.submitHandler(this.state.searchWord)
      this.setState({ searchWord: ""})
   }

   changeHandler = (event) => {
      this.setState({ searchWord: event.target.value })
   }

   render() {
      return (
         <form onSubmit={this.submitHandler}>
            
            <input
               type="text"
               placeholder="search"
               value={this.state.searchWord}
               onChange={this.changeHandler} />
            
            <input type="submit" value="search" />
         </form>
      )
   }
}

export default GifSearch