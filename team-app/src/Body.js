import { useEffect, useState } from "react";

import Card from "./Card";
import Search from "./Search";
import { getUserInfo } from "./api";

const Body = () => {
  const [teammates, setTeammates] = useState([]);
  const [filteredCards, setFilteredCards] = useState(teammates);

  const getUsers = async () => {
    const users = await getUserInfo();
    setTeammates(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
