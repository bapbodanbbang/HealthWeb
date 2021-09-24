import React from 'react';
import Header from '../../Component/Header';
import Prescription from '../../Component/Prescription';
import "./index.scss";

function Patient () {
  return (
    <div className="Patient">
      <Header/>
      <Prescription/>
    </div>
  );
}

export default Patient;