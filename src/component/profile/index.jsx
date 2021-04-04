import React from "react";
import './profile.style.css';


class Profile extends React.Component {

    render() {
        // console.log(this.props.name);
        return(
            <div className='container'>
                <h1 className='userName'>My name is - <span>{this.props.name}</span>, and i'am - {this.props.age} years old</h1>
            </div>
        );
    }
}



export default Profile;