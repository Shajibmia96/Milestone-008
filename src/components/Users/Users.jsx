import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './users.css'
const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            <h2>Our some of users {users.length}</h2>
            <h3> lets see our our awesome users</h3>
         <div className="user">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
         </div>
        </div>
    );
};

export default Users;