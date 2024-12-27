import "./homePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our website! Explore our features and services.</p>
            <button>Explore Now</button>
            <Link to="/login">Login</Link>
        </div>
    );
}