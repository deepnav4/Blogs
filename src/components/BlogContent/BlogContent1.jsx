import React from 'react'
import "./BlogContent.css"
import blog1 from "../AllBlogs/Assests/blog5.jpg"
import { allblogData } from '../../db/db'
import { Link } from 'react-router-dom'

export default function BlogContent1() {
    const currentBlogId = 1;
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
    
  return (
    <div className="blog-content-container">
        <div className="blog-content-main" data-aos="fade-up">
        <div className="blog-content-header">
            <span className="blog-date">Sunday, Jan 1, 2023</span>
            <h1>Bill Walsh Lessons</h1>
            <div className="blog-btns blog-tags">
            <button className={`blog-btn${Math.floor(Math.random() * 8) + 1}`}>Leadership</button>
            <button className={`blog-btn${Math.floor(Math.random() * 8) + 1}`}>Strategy</button>
            <button className={`blog-btn${Math.floor(Math.random() * 8) + 1}`}>Management</button>
            </div>
        </div>
        <div className="blog-hero-image">
            <img src={blog1} alt="Leadership Lessons" />
        </div>

        <article className="blog-content">
            <p>Bill Walsh, the legendary coach of the San Francisco 49ers, transformed a struggling 2-14 team into a 3x Super Bowl-winning dynasty. His leadership philosophy provides timeless lessons for anyone aiming to lead with excellence and build high-performing teams.</p>
            <h2>The Walsh Philosophy</h2>
            <p>Bill Walsh's leadership framework is rooted in discipline, preparation, and creating a culture of excellence. He believed that success was a byproduct of setting high standards and focusing on the process rather than the outcome.</p>
            <h2>Key Leadership Lessons from Bill Walsh</h2>
            <p>Here are some of the core principles from Bill Walsh's playbook:</p>
            <ul>
                <li>The Standard of Performance</li>
                <li>Build a Winning Culture</li>
                <li>Master the Fundamentals</li>
                <li>Adaptability and Innovation</li>
                <li>Empower Your Team</li>
            </ul>

            <h2>Applying Walsh's Lessons in Leadership</h2>
            <p>To apply Bill Walsh's leadership principles in your own life or organization:</p>
            <ol>
                <li><strong>Define Excellence:</strong> Establish a "Standard of Performance" to guide behavior and decisions.</li>
                <li><strong>Create Culture:</strong> Foster an environment that encourages accountability and collaboration.</li>
                <li><strong>Focus on Fundamentals:</strong> Ensure your team masters the basics before pursuing innovation.</li>
                <li><strong>Stay Flexible:</strong> Be willing to adapt strategies as situations evolve.</li>
                <li><strong>Develop Leaders:</strong> Empower individuals at every level to take ownership and lead.</li>
            </ol>

            <h2>Common Leadership Challenges</h2>
            <p>While following Walsh's principles, be mindful of these challenges:</p>
            <ul>
                <li>Resistance to change in culture</li>
                <li>Overemphasis on outcomes rather than process</li>
                <li>Failure to communicate the vision effectively</li>
                <li>Not recognizing and rewarding effort</li>
                <li>Lack of consistency in applying standards</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Bill Walsh's leadership lessons are a masterclass in creating success through discipline, preparation, and a commitment to excellence. By adopting these principles, leaders can inspire their teams to achieve remarkable results. Remember, leadership is about the process and the people, not just the scoreboard.</p>
        </article>
        </div>


        <aside className="blog-sidebar" data-aos="fade-left" data-aos-delay="200">
            <h3>More Articles</h3>
            <div className="sidebar-blogs">
            {allblogData.map((blog) => (
                <Link 
                to={`/Blogs/blog/${blog.id}`} 
                key={blog.id}
                onClick={scrollToTop}
              >
                <div className={`sidebar-blog-card ${blog.id === currentBlogId ? 'active' : ''}`}>
                <img src={blog.image} alt={blog.title} />
                <div className="sidebar-blog-info">
                    <span className="blog-date">{blog.date}</span>
                    <h4>{blog.title}</h4>
                </div>
                </div>
                </Link>
            ))}
            </div>
        </aside>
        </div>
    )
}
