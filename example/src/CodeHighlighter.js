import React, { useState } from 'react'
import CHButtons from './CHButtons'
import Highlight, { defaultProps } from "prism-react-renderer";
import githubtheme from "prism-react-renderer/themes/github";
import theme from "prism-react-renderer/themes/nightOwl";
import copy from 'copy-to-clipboard';

export default function CodeHighlighter(props) {



    const [showLines, setShowLines] = useState(props.showLines);


    return (
        <div className="relative">
            <CHButtons stroke={props.language === "jsx" ? "#fff" : "#000"} copyCode={()=>{copy(props.code)}}  togglelines={()=>{setShowLines(!showLines)}}/>
            <Highlight {...defaultProps} theme={props.language == "jsx" ? theme : githubtheme} code={props.code} language={props.language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {showLines && <span style={{ paddingRight: "10px" }}>{i + 1}</span>}
                                {line.map((token, key) => (


                                    <span {...getTokenProps({ token, key })} />

                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>)

}