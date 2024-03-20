import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostsDetails = () => {

    const navigate = useNavigate()

    const handleGoBack =() =>{
        navigate(-1)
    }

    let {postId} = useParams()

    console.log(postId)

    const postIfo = useLoaderData()
    const {id , title} = postIfo
    return (
        <div>
            <h2>We are display user post {id} </h2>
            <p>{title}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostsDetails;