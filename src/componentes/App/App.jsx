import React, { useState } from 'react';
import PersonCard from '../PersonCard/PersonCard';

const App = () => {
  const [personCard, setPersonCard] = useState([
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown"
    }
  ]);

  return (
    <div id="containerPersonCard">
      {personCard.map((personCard, index) => (
        <PersonCard 
          key={index}
          firstName={personCard.firstName}
          lastName={personCard.lastName}
          age={personCard.age}
          hairColor={personCard.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
