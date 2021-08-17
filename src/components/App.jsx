import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tell={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tell={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
