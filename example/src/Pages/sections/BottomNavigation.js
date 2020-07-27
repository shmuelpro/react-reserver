import React from 'react'
import {Link} from 'react-router-dom'
import NavButton from './NavButton'
function BottomNavigation(props) {

    let directionClass = "justify-between";
    if (!props.previous) {
        directionClass = "justify-end"
    }    


    return (<div className={`flex ${directionClass} p-4`}>

        {props.previous && <NavButton text={`Previous: ${props.previous.name}`} href={props.previous.href} />}
        {props.next && <NavButton text={`Next: ${props.next.name}`}   href={props.next.href} />}
    </div>)
}

export default BottomNavigation;