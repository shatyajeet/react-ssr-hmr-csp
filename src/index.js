import React from 'react';
import {render} from 'react-dom';

const mountPoint = document.getElementById('app');

const App = () => {
  return (
    <div>Hello, server!</div>
  );
};

render(<App />, mountPoint);
