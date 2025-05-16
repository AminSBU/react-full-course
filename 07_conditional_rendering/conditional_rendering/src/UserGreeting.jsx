import PropTypes from 'prop-types';

function UserGreeting(props){
    const WelcomeMessage = <h3>Welcome {props.username}</h3>;

    const FaildMessage   = <h3>Please login first</h3>;

    return(props.isLoggedIn ? WelcomeMessage : FaildMessage);
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Guest"
}

export default UserGreeting;