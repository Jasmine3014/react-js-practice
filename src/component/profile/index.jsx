import React from "react";
import './profile.style.css';
import Bio from "./Bio";
import Skills from "./Skill";
import Links from "./Links";



class Profile extends React.Component {

    me = {
        name: 'Test Name',
        title: 'Frontend Developer, Photography, Traveller',
        dept: 'Computer Science and Engineering',
        skillA: 'Html',
        skillB: 'Css',
        skillC: 'Javascript',
        skillD: 'React',
        linkA: 'Facebook',
        linkB: 'Twitter',
        linkC: 'Linkedin',
        linkD: 'Github'
    };

    render() {
        // console.log(this.props.name);
        return(
            <div className='Container'>
                <h1 className='UserName'>My name is - <span>{this.props.name}</span>
                <br/> i'am - {this.props.age} years old</h1>
                <Bio title= {this.me.title} dept= {this.me.dept} />
                <Skills 
                    skillA={this.me.skillA}
                    skillB={this.me.skillB}
                    skillC={this.me.skillC}
                    skillD={this.me.skillD}
                />
                <Links linkA={this.me.linkA}
                       linkB={this.me.linkB}
                       linkC={this.me.linkC}
                       linkD={this.me.linkD}
                />
            </div>
        );
    }
}



export default Profile;