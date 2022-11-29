import Card from "./Card";
import { teammates } from "./data";

const Body = () => {
  console.log(teammates);
  return (
    <div className="card-container">
      {teammates.map((member) => {
        return <Card member={member} />;
      })}
    </div>
  );
};

export default Body;
