import { useState } from "react";

import Card from "./Card";
import { teammates } from "./data";
import Search from "./Search";

const Body = () => {
  console.log(teammates);
  const [filteredCards, setFilteredCards] = useState(teammates);
  return (
    <>
      <Search setFilteredCards={setFilteredCards} teammates={teammates} />
      <div className="card-container">
        {filteredCards.map((member) => {
          return <Card key={member.id} member={member} />;
        })}
      </div>
    </>
  );
};

export default Body;
