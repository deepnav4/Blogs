import React from 'react';
import "./RecentBlogs.css";
import { Link } from 'react-router-dom';
import { blogImages } from '../../config/images';

const recentBlogsData = [
  {
    id: 7,
    image: blogImages.recentBlogs.blog1,
    date: "Sunday, Jan 5, 2025",
    title: "Understanding JWT Authentication",
    detail: "Learn about JWT (JSON Web Token) authentication, how it works, and best practices for implementing secure user authentication in your applications.",
    tags: ["Authentication", "Security", "Web Development"],
    featured: true
  },
  {
    id: 8,
    image: blogImages.recentBlogs.blog2,
    date: "Friday, Jan 3, 2025",
    title: "Asynchronous Nature of JavaScript",
    detail: "JavaScript is a single-threaded language, but it can handle asynchronous operations efficiently. This article explores how JavaScript manages asynchronous tasks and the benefits of using asynchronous programming in web development.",
    tags: ["JavaScript", "Web Development", "Asynchronous Programming"],
    featured: false
  },
    {
    id: 9,
    image: blogImages.recentBlogs.blog3,
    date: "Tuesday, Dec 31, 2024",
    title: "Understanding The HTTP Status Codes",
    detail: "HTTP status codes are a crucial part of web communication. They provide information about the outcome of an HTTP request and help developers understand the success or failure of a request. This article explores the most common HTTP status codes and their meanings.",
    tags: ["HTTP", "Web Development", "API"],
    featured: false
  },

  {
    id: 10,
    image: blogImages.recentBlogs.blog4,
    date: "Sunday, Jan 1, 2023",
    title: "Grid system for better Interface",
    detail: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    tags: ["Design", "Development"],
    featured: false,
    fullWidth: true
  }
];

export default function RecentBlogs() {
  return (
    <div className='RecentBlogs'>
      <div className="recent-blogs-grid">
        {recentBlogsData.map((blog) => (
          <Link 
            key={blog.id} 
            to={`/Blogs/blog/${blog.id}`} 
            className={`blog-card ${blog.featured ? 'featured' : ''} ${blog.fullWidth ? 'full-width' : ''}`}
          >
            <div className="blog-card-top">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-card-bottom">
              <div className="blog-date">{blog.date}</div>
              <div className="blog-name">{blog.title}</div>
              <div className="blog-detail">{blog.detail}</div>
              <div className="blog-btns">
                {blog.tags.map((tag, index) => (
                  <button key={index} className={`blog-btn${Math.floor(Math.random() * 8) + 1}`}>{tag}</button>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
