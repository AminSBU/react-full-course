import { useState } from 'react'
import List from './List.jsx'

function App() {
  const fruits = [
    {id: 1, name: "Apple", calories: 90},
    {id: 2, name: "Orange", calories: 50},
    {id: 3, name: "Banana", calories: 99},
    {id: 4, name: "Kiwi", calories: 80}
  ];

  return (
    <List items={fruits} category="Fruits" />
  );
}

export default App;