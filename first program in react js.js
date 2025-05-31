import React from "react";// code in the file name firstprog.js
function firstprog(){
    return(
        <h1>Hello students</h1>
    );

    
}
export default firstprog;
//this code is in App.js
import React from 'react';
import Ex from './firstprog';
function App() {
  return(
  <div>
    <Ex/>
  </div>
 
  );
}

export default App;
