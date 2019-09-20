import React from 'react';
import ReactDOM from 'react-dom';
// import Congrats from './congrats';
import Root from './root'


// The entry file

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root name="Big Ben"/>, root);
});
