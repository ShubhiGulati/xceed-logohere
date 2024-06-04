import React from 'react';
import Header from './Header';
import Button from './button';
import Services from './Services';
import Process from './Process';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Button/>
      <Services />
      <Process />
      <Footer />
    </div>
  );
}
export default App;
