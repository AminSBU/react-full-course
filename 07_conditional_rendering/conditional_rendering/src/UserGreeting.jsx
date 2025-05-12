function UserGreeting(props){
    return(props.isLoggedIn ? <h3>Welcome {props.username}</h3> : <h3>Please login first</h3>);
}

export default UserGreeting;