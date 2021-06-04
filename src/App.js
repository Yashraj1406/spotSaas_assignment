import React from 'react'
import './App.css';
import Header from './Header'
import Products from './Products'
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function App() {

  const update = () => {
    // calling the forceUpdate() method
    setTimeout((
      this.forceUpdate()
    ),1000);
 }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Products />
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
