import React from 'react';
function App() {
  var a=20;
  var b=30;
  var c=a+b;
  c=<p>{c}</p>
  return(
    <div>
      <p>{c}</p>
    </div>
  );
}

export default App;
