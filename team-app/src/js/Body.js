import { useEffect, useState } from "react";

import { getUserInfo } from "./api";
import Card from "./Card";
import Search from "./Search";
import "../css/card.css";
import "../css/style.css";

const Body = () => {
  const [listOfMembers, setListOfMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetchUsersInfo();
  }, []);

  const fetchUsersInfo = async () => {
    const members = await getUserInfo();
    setListOfMembers(members);
    setFilteredMembers(members);
  };

  return (
    <>
      <Search
        listOfMembers={listOfMembers}
        setFilteredMembers={setFilteredMembers}
      />
      <div className="card-container">
        {filteredMembers.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </div>
    </>
  );
};
export default Body;
