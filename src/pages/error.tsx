import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: { message: string; statusText: string } = useRouteError() as {
    message: string;
    statusText: string;
  };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! 12312313123</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
