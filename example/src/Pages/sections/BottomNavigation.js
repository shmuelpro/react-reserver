import React from 'react'
function BottomNavigation(props) {

    let directionClass = "justify-between";
    if (!props.previous) {
        directionClass = "justify-end"
    }

    return (<div className={`flex ${directionClass} p-4`}>

        {props.previous && <a href={props.previous && props.previous.href} class="font-bold py-2 px-4 rounded bg-orange-500 text-white hover:bg-orange-700">
            Previous: {props.previous && props.previous.name}
        </a>}
        {props.next && <a href={props.next && props.next.href} class="font-bold py-2 px-4 rounded bg-orange-500 text-white hover:bg-orange-700">
            Next: {props.next && props.next.name}
        </a>}
    </div>)
}

export default BottomNavigation;