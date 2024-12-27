import "./loginPage.css";
import { Link } from "react-router-dom";


export default function LoginPage(){
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter your username"/>
            <input type ="password" placeholder="Entere your password"/>
            <button>Login</button>
            <Link to="/">Home</Link>

        </div>
    )
}