import React, { useState } from 'react';

function SignUp () {
  const [age, setAge] = useState(43);
  
  return (
    <div>
        {age}
    </div>
  );
}

export default SignUp;