import React from 'react';
import {Link} from 'react-router-dom'

const linkStyle = "h-9 font-bold py-2 px-4 rounded bg-orange-500 text-white hover:bg-orange-700"
export default function NavButton(props) {


    return (<Link to={props.href} className={linkStyle}>
        {props.text}
    </Link>)
}