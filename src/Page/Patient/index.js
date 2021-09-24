import React from 'react';
import Header from '../../Component/Header';
import "./index.scss";

function Patient () {
  return (
    <div className="Patient">
      <Header/>
      <div>
        <div className="Section_A">
          <div>name</div>
          <div className="List">
            <div>test</div>
            <div>test2</div>
          </div>
        </div>
        <div className="Section_B">
          <div>name</div>
          <div>test3</div>
        </div>
      </div>
    </div>
  );
}

export default Patient;