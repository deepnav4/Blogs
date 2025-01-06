import React from 'react'
import "./AllBlogs.css"
import blog5 from "./Assests/blog5.jpg"
import blog6 from "./Assests/blog6.jpg"
import blog7 from "./Assests/blog7.jpg"
import blog8 from "./Assests/blog8.jpg"
import blog9 from "./Assests/blog9.jpg"
import blog10 from "./Assests/blog10.jpg"
import { Link } from 'react-router-dom'

const blogData = [
    {
        id: 1,
        image: blog5,
        date: "Sunday, Jan 1, 2023",
        title: "Bill Walsh leadership lessons",
        detail: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: ["Design", "Research"]
    },
    {
        id: 2,
        image: blog6,
        date: "Sunday, Jan 1, 2023",
        title: "PM mental models",
        detail: "Mental models are simplified expressions of complex processes, systems effectively navigate the world.",
        tags: ["Design", "Research"]
    },
    {
        id: 3,
        image: blog7,
        date: "Sunday, Jan 1, 2023",
        title: "What is Wireframing?",
        detail: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: ["Design", "Framework", "Presentation"]
    },
    {
        id: 4,
        image: blog8,
        date: "Sunday, Jan 1, 2023",
        title: "Better Designers with collab",
        detail: "Collaboration can make our teams stronger, and our individual designs better.",
        tags: ["Design", "Research"]
    },
    {
        id: 5,
        image: blog9,
        date: "Sunday, Jan 1, 2023",
        title: "Javascript frameworks",
        detail: "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: ["Design", "Research"]
    },
    {
        id: 6,
        image: blog10,
        date: "Sunday, Jan 1, 2023",
        title: "Podcast: CX Community",
        detail: "Starting a community doesn't need to be complicated, but how do you get started?",
        tags: ["Design", "Framework", "Presentation"]
    }
];

// Blog Card Component
const BlogCard = ({ blog }) => (
    <div className="all-blogs-cont2-card">
        <div className="blog-card-top">
        <Link to={`/Blogs/blog/${blog.id}`}>
        <img src={blog.image} alt={blog.title} />
        </Link>
        </div>
        <div className="blog-card-bottom">
            <div className="blog-date">{blog.date}</div>
            <div className="blog-name">{blog.title}</div>
            <div className="blog-detail">{blog.detail}</div>
            <div className="blog-btns">
                {blog.tags.map((tag, index) => (
                <button key={index} className={`blog-btn${index + 1}`}>{tag}</button>
                ))}
            </div>
        </div>
    </div>
    );

export default function AllBlogs() {
    return (
        <div className='AllBlogs'>
            <div className="all-blogs-cont1">
                <h4>All Blogs</h4>
            </div>
            <div className="all-blogs-cont2">
                {blogData.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export { blogData }