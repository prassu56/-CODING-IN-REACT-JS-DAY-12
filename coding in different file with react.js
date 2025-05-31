import React from "react"; //this code is in the file ex.js
function ex(){
    return(
        <div>
            <h1>
                i am example page
            </h1>
        </div>
    );
}
export default ex;
//below code is  App.js
import React from 'react';
import Ex from './ex';
function App() {
  return(
  <div>
    <Ex/>
  </div>
 
  );
}

export default App;

