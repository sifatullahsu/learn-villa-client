import React from 'react';

const BlogPage = () => {
  return (
    <div className='container my-5'>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className='text-center mb-4'>Blog Posts</h2>
        <div className='blog-card mb-5'>
          <h5>What is cors?</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto obcaecati nihil consectetur iusto amet sunt et vero, vel optio.</p>
        </div>
        <div className='blog-card mb-5'>
          <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto obcaecati nihil consectetur iusto amet sunt et vero, vel optio.</p>
        </div>
        <div className='blog-card mb-5'>
          <h5>How does the private route work?</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto obcaecati nihil consectetur iusto amet sunt et vero, vel optio.</p>
        </div>
        <div className='blog-card mb-5'>
          <h5>What is Node? How does Node work?</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto obcaecati nihil consectetur iusto amet sunt et vero, vel optio.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;