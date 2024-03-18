import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
    const user = useLoaderData();
    console.log(user)
    const {name ,email} = user;
    return (
        <div>
            <h4>We are show here our users details</h4>
            <h1>Users details : </h1>
            <p>Name : {name}</p>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default UsersDetails;