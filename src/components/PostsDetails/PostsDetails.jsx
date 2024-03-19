import { useLoaderData } from "react-router-dom";

const PostsDetails = () => {

    const postIfo = useLoaderData()
    const {id , title} = postIfo
    return (
        <div>
            <h2>We are display user post {id} </h2>
            <p>{title}</p>
        </div>
    );
};

export default PostsDetails;