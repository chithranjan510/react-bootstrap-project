import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar />
      <div className="a">Shown</div>
      <div className="b">Hidden</div>
      <div className="c">shown</div>
      <Button>Click</Button>
    </>
  );
}

export default App;
