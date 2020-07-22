import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import githubtheme from "prism-react-renderer/themes/github";
export default function GettingStarted(props) {

    const exampleCode = `
    import React, { Component } from 'react'

    import Reserver from 'react-reserver'
    import 'react-reserver/dist/index.css'
    
    function App(){
    //What is this
      return <Reserver />
    }
`;


    const install= `
    yarn add react-reserver
    npm install react-reserver
    `


    return (<div>
        
        <h1 className="text-5xl mx-10 my-5">Getting Started</h1>
        <p className="p-5"
        >
            So you want to add the component to your project. Like all components you got to start with the installation
        </p>
        <div>
            <Highlight {...defaultProps}  theme={githubtheme} code={install} language="bash">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
     
        <div style={{ marginBottom: "10px" }}><Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
        </div>

    </div>)

}