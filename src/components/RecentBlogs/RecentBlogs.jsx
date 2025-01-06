import React from 'react';
import "./RecentBlogs.css";
import { Link } from 'react-router-dom';
import { blogImages } from '../../config/images';

const recentBlogsData = [
  {
    id: 7,
    image: blogImages.recentBlogs.blog1,
    date: "Sunday, Jan 1, 2023",
    title: "UX-Review Presentation",
    detail: "How do you create compelling presentations that wow your colleagues and impress your managers?\n\
            \n\
            Creating a great presentation requires a combination of technical skills, such as knowing how to use presentation software, and creative skills, such as being able to structure a coherent narrative and design visually appealing slides. \n\
            It also requires practice and experience",
    tags: ["Design", "Research", "Presentation"],
    featured: true
  },
  {
    id: 8,
    image: blogImages.recentBlogs.blog2,
    date: "Sunday, Jan 1, 2023",
    title: "Migrating to Linear 101",
    detail: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
    tags: ["Design", "Research"],
    featured: false
  },
  {
    id: 9,
    image: blogImages.recentBlogs.blog3,
    date: "Sunday, Jan 1, 2023",
    title: "Building your API Stack",
    detail: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["Design", "Research"],
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
                  <button key={index} className={`blog-btn${index + 1}`}>{tag}</button>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
