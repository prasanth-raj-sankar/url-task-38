import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Welcome to the Home Page!</h1>
        <div className="mt-3">
          <Link to="/shorten-url" className="btn btn-success m-2">
            URL Shortener
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;