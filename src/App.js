import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoding: true,
    movies: []
  };
  
  render(){
    const {isLoading} = this.state;
    return (
    <div>
      {
        isLoading ? "Loading..." : "We are ready"
      }
    </div>
    );
  }
}

export default App;
