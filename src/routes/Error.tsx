import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>sorry.</p>
    </div>
  );
};
