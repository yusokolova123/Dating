function Profile(props) {
    console.log(props);
    return (
        <div>
            <img src={props.image} alt="picture" width="300px" />
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.description}</p>
         
        </div>
    )
}
export default Profile;