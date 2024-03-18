
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
     const {name,email,phone,id} = user;
     const usesStyles ={
             border: '2px solid yellow',
             padding: '10px ',
             borderRadius : " 5px",
             marginTop : "5px"

     }

    return (
        <div style={usesStyles}>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{phone}</p>
              <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object
};

export default User;