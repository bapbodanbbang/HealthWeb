import React, { useState } from 'react';
import Layout from '../../component/Layout';

function Main () {
  const [age, setAge] = useState(42);
  
  return (
    <Layout/>
  );
}

export default Main;