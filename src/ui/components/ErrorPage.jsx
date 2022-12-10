import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="text-center mt-5">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i> Error: {error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};
