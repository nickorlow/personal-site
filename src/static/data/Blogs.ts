import VrboImage from "../images/vrbo-logo-min.png";
import Blog from "../../types/Blog";
import CSMD from "./blogs/c-sharp-c-assignment.md";
import TAB from "./blogs/there-is-a-blog.md";
import HID from "./blogs/hidden-blog.md";
import NWSSSL from "./blogs/nws-how-to-do-ssl.md";
import SP2023 from "./blogs/spring-break-projects-2023.md";

const CSharpBlog: Blog = {
    title: "Doing C assignments in C#",
    date: new Date(2022, 2, 18, 14, 15, 0),
    image: VrboImage,
    mdfile: CSMD,
    private: false
}

const TestBlog: Blog = {
    title: "There's a Blog!",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: VrboImage,
    mdfile: TAB,
    private: false
}

const PrivateBlog: Blog = {
    title: "This blog can only be accessed via the direct URI",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: VrboImage,
    mdfile: HID,
    private: true
}

const NWSSSLBlog: Blog = {
    title: "Implementing SSL in NWS CDS",
    date: new Date(2023, 0, 20, 12, 0, 0),
    image: VrboImage,
    mdfile: NWSSSL,
    private: false
}

const SpringBreak2023Blog: Blog = {
    title: "Spring Break 2023",
    date: new Date(2023, 2, 11, 12, 0, 0),
    image: VrboImage,
    mdfile: SP2023,
    private: false
}


export const AllBlogs: Blog[] = [CSharpBlog, PrivateBlog, TestBlog, NWSSSLBlog, SpringBreak2023Blog];

