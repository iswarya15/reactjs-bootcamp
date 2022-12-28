import TeamLogo from "../../assets/coding.png";
import "./header.css";

const Header = () => (
  <div className="header">
    <img className="logo" src={TeamLogo} width="60" height="60" />
    <h1>Gladiators</h1>
  </div>
);

export default Header;
