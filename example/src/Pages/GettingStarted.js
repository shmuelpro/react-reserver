import React from 'react'
import basicExampleCode from './code/basicExampleCode'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import githubtheme from "prism-react-renderer/themes/github";
import DocPar from './sections/DocPar'
import DocTitle from './sections/DocTitle'
export default function GettingStarted(props) {



    const install = `
    yarn add react-reserver
    or
    npm install react-reserver
    `


    return (<div>

        <DocTitle>Getting Started</DocTitle>
        <DocPar >
            So you want to <b>add</b> the component to your project. Like all components start with installation.
        </DocPar>
        <div>
            <Highlight {...defaultProps} theme={githubtheme} code={install} language="bash">
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
        <DocPar
        >
           Add the following code
        </DocPar>
        <div style={{ marginBottom: "10px" }}><Highlight {...defaultProps} theme={theme} code={basicExampleCode} language="jsx">
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