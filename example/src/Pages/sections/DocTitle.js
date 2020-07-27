import React from 'react'
import NavButton from './NavButton'
function DocTitle(props) {

    return (<div className="flex items-center">
        <h1 className="text-5xl mx-10 my-5 border-b-2 border-orange-400 pb-2">{props.children}</h1>{props.next && <NavButton href={props.next.href} text={`Next: ${props.next.name}`}  />}
    </div>)
}


export default DocTitle;