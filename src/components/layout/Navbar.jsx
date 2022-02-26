import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-primary-focus text-xl font-bold text-white  ">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub size="40" className="inline pr-2 text-3xl" />
          <Link to="/">Github Finder</Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
