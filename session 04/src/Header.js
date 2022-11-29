import TeamLogo from "./assets/react.png";

export default Header = () => {
  return (
    <div className="header">
      <img className="logo" src={TeamLogo} width="60" height="60" />
      <h1>Gladiators</h1>
    </div>
  );
};
