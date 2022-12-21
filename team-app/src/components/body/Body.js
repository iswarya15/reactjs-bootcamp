import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getUserInfo } from "../../api/api";
import { users } from "../../AppConst";
import Card from "../card/Card";
import Search from "../search/Search";
import NoUserFound from "../no-user-found/NoUserFound";
import "./body.css";

const Body = () => {
  const [listOfMembers, setListOfMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetchUsersInfo();
  }, []);

  const fetchUsersInfo = async () => {
    const members = await getUserInfo(users);
    setListOfMembers(members);
    setFilteredMembers(members);
  };

  return (
    <>
      <Search
        listOfMembers={listOfMembers}
        setFilteredMembers={setFilteredMembers}
      />
      {filteredMembers.length ? (
        <div className="card-container">
          {filteredMembers.map((member) => (
            <Link className="profile-link" to={`/profile/${member.login}`}>
              <Card key={member.id} member={member} />
            </Link>
          ))}
        </div>
      ) : (
        <NoUserFound />
      )}
    </>
  );
};
export default Body;
