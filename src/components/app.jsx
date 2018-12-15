import React from 'react';

function App(props) {
  return (
    <>
      <h1>Hello</h1>
      <main id="main" className="content">{props.message}</main>
    </>
  );
}

export default App;
