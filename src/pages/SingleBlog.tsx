import React, {useEffect, useState} from 'react';
import './Home.css';
import ReactMarkdown from 'react-markdown'
import {AllBlogs} from "../static/data/Blogs";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark as theme} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Link} from "react-router-dom";
import Blog from "../types/Blog";

function SingleBlog() {

    const [blog, setBlog] = useState<Blog | undefined>(undefined);
    const [blogText, setBlogText] = useState<string>('');

    useEffect(()=> {
        let blogName = window.location.pathname.split('/').at(-1);
        setBlog(AllBlogs.find(b => b.uri == blogName));
    }, [])

    useEffect(()=> {
        if(blog === undefined) return;
        fetch(blog.mdfile)
            .then(response => {
                return response.text()
            })
            .then(text => {
                setBlogText(text)
            })
    }, [blog]);

    return (
            blog === undefined ? <div></div> :
            <div className="Blog" style={{paddingTop: 30}}>
                <h1>{blog.title}</h1>
                <p>{blog.date.toLocaleDateString()}</p>
                <p><Link to={"/blogs"}>Back</Link></p>
                <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                    <div className={"d-md-none d-block"} style={{textAlign: "left", margin: 20}}>
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
                            {blogText}
                        </ReactMarkdown>
                    </div>
                    <div className={"d-none d-md-block"} style={{textAlign: "left", margin: 20, maxWidth: "80vw"}}>
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
                            {blogText}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>

    );
}

export default SingleBlog;
