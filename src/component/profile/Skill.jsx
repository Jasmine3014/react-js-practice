import React from 'react';

const Skill = (props) => (
    <div className='Skills'>
        <h3>Skills: </h3>
        <ul>
            <li>{props.skillA}</li>
            <li>{props.skillB}</li>
            <li>{props.skillC}</li>
            <li>{props.skillD}</li>
        </ul>

    </div>
);

export default Skill;