

import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';



const Post =({post}) => {
    const { id,body,title} = post;
    const navigate = useNavigate()

    const handleShowDetails =() =>{
           navigate(`/post/${id}`)
    }

    const PostStyles = {
        border : '2px solid  yellow',
        padding : '5px',
        borderRadius : '7px',
        marginTop : '10px'
    }
    console.log(post)
    return (
        <div style={PostStyles}>
               <h2>{id}</h2>
               <h3>{title}</h3>
               <p>{body}</p>
               <Link to={`/post/${id}`}><button>See more</button></Link>
               <button onClick={ handleShowDetails}>See Post Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;