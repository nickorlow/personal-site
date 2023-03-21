import VrboImage from "../images/vrbo-logo-min.png";
import Blog from "../../types/Blog";
import CSMD from "./blogs/c-sharp-c-assignment.md";
import TAB from "./blogs/there-is-a-blog.md";
import HID from "./blogs/hidden-blog.md";
import NWSSSL from "./blogs/nws-how-to-do-ssl.md";
import SP2023 from "./blogs/spring-break-projects-2023.md";
import SPLG1 from "./blogs/side-project-log-3-20-2023.md";

const CSharpBlog: Blog = {
    uri: "c-assignments-in-csharp",
    title: "Doing C assignments in C#",
    date: new Date(2022, 2, 18, 14, 15, 0),
    image: VrboImage,
    mdfile: CSMD,
    private: false
}

const TestBlog: Blog = {
    uri: "there-is-a-blog",
    title: "There's a Blog!",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: VrboImage,
    mdfile: TAB,
    private: false
}

const PrivateBlog: Blog = {
    uri: "private-blog",
    title: "This blog can only be accessed via the direct URI",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: VrboImage,
    mdfile: HID,
    private: true
}

const NWSSSLBlog: Blog = {
    uri: "ssl-in-nws-cds",
    title: "Implementing SSL in NWS CDS",
    date: new Date(2023, 0, 20, 12, 0, 0),
    image: VrboImage,
    mdfile: NWSSSL,
    private: false
}

const SpringBreak2023Blog: Blog = {
    uri: "spring-break-2023",
    title: "Spring Break 2023",
    date: new Date(2023, 2, 11, 12, 0, 0),
    image: VrboImage,
    mdfile: SP2023,
    private: false
}


const SideProjectLogOne: Blog = {
    uri: "side-project-log-3-20-2023",
    title: "Side Project Log 3/20/23",
    date: new Date(2023, 2, 20, 12, 0, 0),
    image: VrboImage,
    mdfile: SPLG1,
    private: false
}


export const AllBlogs: Blog[] = [CSharpBlog, PrivateBlog, TestBlog, NWSSSLBlog, SpringBreak2023Blog, SideProjectLogOne];

