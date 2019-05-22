import React from 'react';
import NavBar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/contact';
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import Post from './components/post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component= {Home} />
        <Route path="/about" component= {About} />
        <Route path="/contact" component= {Contact} />
        <Route path="/users" component ={Users} />
        <Route path="/:user_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
