import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserInfo } from "../../api/api";
import Card from "../card/Card";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await getUserInfo([id]);
    const userData = res.length && res[0];
    setUser(userData);
  };

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <div className="profile-cards">
        <Card member={user} />
        <img
          className="card"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user.login}`}
        />
      </div>
    </div>
  );
};

export default Profile;
