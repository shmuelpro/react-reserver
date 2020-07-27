import React from 'react'
import basicExampleCode from './code/basicExampleCode'
import CodeHighlighter from '../CodeHighlighter'
import DocPar from './sections/DocPar'
import DocTitle from './sections/DocTitle'
import BottomNavigation from './sections/BottomNavigation'
import basicgif from '../gifs/basic.gif'
import install from './code/installexample'
export default function GettingStarted(props) {

    console.log(props)

    return (<div>

        <DocTitle next={props.next}>Getting Started</DocTitle>
        <DocPar >
            So you want to <b>add</b> the component to your project. Like all components start with installation.
        </DocPar>
        <div>
            <CodeHighlighter language={"bash"} code={install} />

        </div>
        <DocPar
        >
            Add the following code
        </DocPar>
        <div className="mb-10">
            <CodeHighlighter language="jsx" code={basicExampleCode} />
        </div>
        <DocPar>
            And thats it!
           <br />
           Now you should be able to click and drag across the grid to create new bars
           <img src={basicgif} />
        </DocPar>
        <BottomNavigation previous={props.previous} next={props.next} />
    </div>)

}