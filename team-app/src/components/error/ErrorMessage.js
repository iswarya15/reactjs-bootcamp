import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div className="error-message">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText}</p>
    </div>
  );
};

export default ErrorComponent;
