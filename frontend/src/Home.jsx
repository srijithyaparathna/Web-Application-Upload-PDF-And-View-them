
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application. Feel free to explore and navigate through different sections.</p>
      <Link to="/dashboard">
        <button className="home-button">Go to Dashboard</button>
        
      </Link>
      <Link to="/login">
        <button className="home-button">Go to login</button>
        
      </Link>

      <Link to="/register">
        <button className="home-button">Go to register</button>
        
      </Link>


    </div>
  );
}

export default Home;
