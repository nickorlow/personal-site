import VrboImage from "../images/vrbo-logo-min.png";
import Blog from "../../types/Blog";
import CSMD from "./blogs/c-sharp-c-assignment.md";
import TAB from "./blogs/there-is-a-blog.md";

const CSharpBlog: Blog = {
    title: "Doing C assignments in C#",
    date: new Date(2022, 2, 18, 14, 15, 0),
    image: VrboImage,
    mdfile: CSMD,
    private: false
}

const TestBlog: Blog = {
    title: "There's a Blog!",
    date: new Date(),
    image: VrboImage,
    mdfile: TAB,
    private: false
}

const PrivateBlog: Blog = {
    title: "This blog can only be accessed via the direct URI",
    date: new Date(),
    image: VrboImage,
    mdfile: TAB,
    private: true
}


export const AllBlogs: Blog[] = [CSharpBlog, PrivateBlog, TestBlog];

