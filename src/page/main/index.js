import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Map from '../../component/Map';

function Main () {
  return (
    <div className="main">
      <Header/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default Main;