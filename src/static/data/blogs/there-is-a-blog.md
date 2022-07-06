My Website now has a blog! I've always wanted to write a blog and I've been keeping a collection of writings in Google Docs that I'll eventually move over here.

In this blog, I'm going to discuss how I built this blog and the differences it has with the other blogs I've built. As a point of comparison to this blog, I'm going 
to be using the [CavCash Newsroom](https://cavcash.com/newsroom) which I also built.

## How I built this blog

This blog has no real backend. Blogs are written in Markdown files that are hosted with this website, which itself is a React webapp. I then have a file that adds metadata
to the blogs such as a title and a date. The metadata file looks like this:
```typescript
import BlogImage from "../images/blog-img-min.png";
import Blog from "../../types/Blog";
import CSMD from "./blogs/c-sharp-c-assignment.md";
import TAB from "./blogs/there-is-a-blog.md";

const CSharpBlog: Blog = {
    title: "Doing C assignments in C#",
    date: new Date(2022, 2, 18, 14, 15, 0),
    image: BlogImage,
    mdfile: CSMD,
    private: false
}

const TestBlog: Blog = {
    title: "There's a Blog!",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: BlogImage,
    mdfile: TAB,
    private: false
}

const PrivateBlog: Blog = {
    title: "This blog can only be accessed via the direct URI",
    date: new Date(2022, 7, 6, 12, 0, 0),
    image: BlogImage,
    mdfile: TAB,
    private: true
}


export const AllBlogs: Blog[] = [CSharpBlog, PrivateBlog, TestBlog];
```
This metadata then gets converted into a list and whenever you view a blog, it fetches the associated markdown file and parses it to show you here.

I decided to add an option to hide some blogs from the 'All blogs' page (Notice how you don't see [This Blog](http://localhost:3000/blog?id=1) there?) 
It's intended to be used so I can host things like Privacy Policies and Terms of Services for apps I write without cluttering up my blog. 

You may have noticed that there's an unused Image option. This option would provide a thumbnail, but I decided to remove them for now in favor of a cleaner look.

## How I built the CavCash Newsroom

The CavCash Newsroom does have a backend. The backend is a part of the larger CavCashAPI which also manages the rest of the backend code for CavCash.
It simply stores blog details in a MongoDB collection and returns them to the React frontend. It also supports 'private' blogs, however, it filters
out the private blogs in the backend which makes it harder to find a private blog. An entry for a CavCash Newsroom entry looks like this:
```json
{
    "_id" : ObjectId("60ecc0b23eae899e4e46616f"),
    "BlogID" : NumberInt(3),
    "Title" : "CavCash acquires Apple Inc",
    "Author" : "nickorlow",
    "CreatedDate" : ISODate("2021-07-12T22:22:41.000+0000"),
    "HideBlog": false,
    "Content" : "*AUSTIN, TX* - CavCash Inc has finalized a deal to buy Apple Inc (NASDAQ: AAPL) for 3.3 trillion dollars. This marks the 3rd 'FAANG' company CavCash has acquired, with the others being Google and Amazon. CavCash CEO Nicholas Orlowsky has been quoted as saying: \"We are pleased to welcome Apple to the CavCash family.\"\n\nApple CEO Tim Cook was enthused about the deal, expressing excitement for Apple's integration into the overall CavCash ecosystem. Tim will remain CEO of Apple for at least the next two years. \n\nSome have expressed antitrust concerns about CavCash becoming a monopoly.\"\n",
    "CoverImage" : "data:image/jpeg;base64,/9j/4AAQS...GMvWWXtB1/9k="
}
```
 
This blog looks like the following: 

![cavcash-newsroom](/blog-images/example-blog-list.png)
![cavcash-newsroom](/blog-images/example-blog-content.png)

_Screenshot of CavCash Newsroom_

## Comparison of CavCash Newsroom and this Blog

CavCash Newsroom needed to be able to be published to without pushing new code to the frontend. We also already had an API written for other things that I could just add
blog functionality to, so I chose to write it with a C# backend and a React frontend. The CavCash Newsroom also has some features not present in this blog such as author information and cover images. These features were left out because I am the only author on this blog, and I decided that cover images wouldn't be necessary.

This blog does not have a backend api associated with it and using a blog API seemed like more trouble than building the feature myself. In order to ship blogs quickly and not create unnecessary complexities in my codebase, I decided to just have markdown files that were included in the frontend as my blogs. As I write more blogs this may prove to be a poor idea for performance but that's a bridge I can cross when I get there (Maybe build my own [NWS](https://nws.nickorlow.com) Blogging service?).
