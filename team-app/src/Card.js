import "./card.css";

const Card = ({ member }) => {
  return (
    <div className="card">
      <div>
        <img
          className="profile-img"
          src={member.photo}
          width="120"
          height="120"
        />
      </div>
      <div className="card-description">
        <p>
          <b>{member.name} </b>
        </p>
        <p>
          <b>Company: </b>
          {member.company}
        </p>
        <p>
          <b>Experience: </b>
          {member.experience}
        </p>
        <p>
          <b>Location: </b>
          {member.location}
        </p>
        <p className="id">
          <b>ID: </b>
          {member.id}
        </p>
      </div>
    </div>
  );
};

export default Card;
