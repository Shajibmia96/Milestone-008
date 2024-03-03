import { Link } from "react-router-dom";
import '../Style/Header.css'
const Header = () => {
    return (
        <div>
             <ul>
                <Link to = "/">Home</Link>
                <Link to="/about">About</Link>
                <Link to ="/users">Our users</Link>
                <Link to="/contact">Contact</Link>
                <Link to="more-info">More Info</Link>
            </ul>
        </div>
    );
};

export default Header;