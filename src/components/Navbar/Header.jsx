import { Link, NavLink } from "react-router-dom";
import '../Style/Header.css'
const Header = () => {
    return (
        <div>
             <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Our Users</NavLink>
                <NavLink to="/contact">Contact</NavLink>
               
                <Link to="/contact">Contact</Link>
                <Link to="more-info">More Info</Link>
            </ul>
        </div>
    );
};

export default Header;