import React, { useState } from 'react';

function Main () {
  const [age, setAge] = useState(42);
  
  return (
    <div>
        {age}
    </div>
  );
}

export default Main;