// // import "./App.css";
// import Navbar from "./Componants/Navbar";
// import NewsCard from "./Componants/NewsCard";

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Componants/Navbar';
import NewsCard from './Componants/NewsCard'
import News from './Componants/News';

export class App extends Component {
  

  render() {
    return (
      <div className='dark-bg'>
        <Navbar />
      {/* <button className='btn btn-outline-dark'>Ketan</button> */}
      <News/>
      </div>
    )
  }
}

export default App

