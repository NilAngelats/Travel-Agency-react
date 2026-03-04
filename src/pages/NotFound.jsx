import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {/* Image */}
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404 not found"
        className="w-72 md:w-96 mb-6 rounded-xl"
      />

      {/* Text */}
      <h1 className="text-4xl font-bold mb-2">404 - Page not found</h1>
      <p className="text-base-content/70 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link to={"/"}>
        <button className="btn btn-primary" type="button">
          ← Go to Home page
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
