function UserGreeting(props){
    const WelcomeMessage = <h3>Welcome {props.username}</h3>;

    const FaildMessage   = <h3>Please login first</h3>;
    
    return(props.isLoggedIn ? WelcomeMessage : FaildMessage);
}

export default UserGreeting;