import "./card.css";
const Card = ({ member }) => {
  return (
    <div className="card">
      <img className="profile-img" src={member.avatar_url} />
      <div className="card-description">
        <h3>{member.name}</h3>
        <p>{member.company}</p>
        <p>{member.location}</p>
      </div>
      <p className="member-id-btn">{member.login}</p>
    </div>
  );
};

export default Card;
