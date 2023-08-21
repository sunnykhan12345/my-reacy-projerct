import React from 'react'
import blogimg from '../../Images/office.jpg';
import './Blog.css'
const Blog = () => {
  return (
    <div id='Blog'>
      <div className='container'>
        <div className="blog_wrapper">
            <div className='blog_col'>
                <h3>WE HELP BUSINESS LUNCH, GROW AND SUCCESS</h3>
                <p>
                Considering you built your website with WordPress, it might seem a bit strange to some that it doesn’t feature a blog. However, when you’re working hard on and in your business, it can feel like the last thing you can justify spending time on is blogging.
                </p>
                <div className='btn_wrapper'>
                    <a href='/' className='btn'>Get Started</a>
                </div>
            </div>
            <div className='blog_col'>
                <img src={blogimg} alt='blog-img' className='blog_img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
