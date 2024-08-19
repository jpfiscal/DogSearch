import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

function App() {
  const defaultProps  = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "duke",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "perry",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
  return (
    <div className="App">
      <h1>Dog Search:</h1>
      <BrowserRouter>
        <Nav dogs = {defaultProps.dogs.map(dog => dog.name)}/>
        <Routes>
          <Route path="/dogs/:name" element={<DogDetails dogs={defaultProps.dogs}/>}/>
          // what props will this need?
          <Route path="/dogs" element={<DogList dogs={defaultProps.dogs}/>}/>
             // what props will this need?
          <Route path="*" element={<Navigate to="/dogs" replace/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
