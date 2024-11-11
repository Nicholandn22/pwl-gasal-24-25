import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <Link to="/project">project</Link>
        </li>
      </ul>
      <h1>This is home Page</h1>
    </div>
  );
}

export default Home;
