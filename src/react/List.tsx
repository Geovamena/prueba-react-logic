import React from "react";

const List = () => {
  const characters = [
    "Luke Skywalker",
    "C-3PO",
    "R2-D2",
    "Darth Vader",
    "Princess Leia",
    "Han Solo",
  ];

  return (
    <ul style={{ backgroundColor: 'white' }} className="list-decimal list-inside">
      {characters.map((character, index) => (
        <li style={{ backgroundColor: 'white' }} key={index}>{character}</li>
      ))}
    </ul>
  );
};

export default List;

