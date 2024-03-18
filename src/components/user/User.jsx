
import PropTypes from 'prop-types';

const User = ({user}) => {
     const {name, email,phone} = user;
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
        </div>
    );
};

User.propTypes = {
    
};

export default User;