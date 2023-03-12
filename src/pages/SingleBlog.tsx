import React, {useEffect, useState} from 'react';
import './Home.css';
import ReactMarkdown from 'react-markdown'
import {AllBlogs} from "../static/data/Blogs";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark as theme} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Link} from "react-router-dom";

function SingleBlog() {

    const [blog, setBlog] = useState('');
    const [blogId, setBlogId] = useState(0);

    useEffect(()=> {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setBlogId(parseInt(urlParams.get('id') || ''));
    }, [])

    fetch(AllBlogs[blogId].mdfile)
        .then(response => {
            return response.text()
        })
        .then(text => {
            setBlog(text)
        })

    return (
        <div className="Blog" style={{padding: 20}}>
            <h1>{AllBlogs[blogId].title}</h1>
            <p>{AllBlogs[blogId].date.toLocaleDateString()}</p>
            <p><Link to={"/blogs"}>Back</Link></p>
            <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                <div style={{textAlign: "left", margin: 20, maxWidth: "80vw"}}>
                    <ReactMarkdown
                        components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={theme}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {blog}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
