import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  return(
    <main className="container text-center">
      <h1>Page Not Found</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </main>
  );
};
export  default NoMatch;