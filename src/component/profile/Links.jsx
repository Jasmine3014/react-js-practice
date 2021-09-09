import React from 'react';


const Links = (props) => (
    <div className='Links'>
        <h3>Social Links: </h3>
        <ul>
            <li>
                <a href='https://www.facebook.com/jazzjassmin'>{props.linkA}</a>
            </li>
            <li>
                <a href='https://twitter.com/JasmineAkter10'>{props.linkB}</a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/jasmine-akter-05a9b41b1/'>{props.linkC}</a>
            </li>
            <li>
                <a href='https://github.com/Jasmine3014'>{props.linkD}</a>
            </li>
        </ul>
    </div>
);

export default Links;