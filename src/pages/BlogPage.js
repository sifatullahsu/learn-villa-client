import React from 'react';

const BlogPage = () => {
  return (
    <div className='container my-5'>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className='text-center mb-4'>Blog Posts</h2>
        <div className='blog-card mb-5'>
          <h5>What is cors?</h5>
          <p>What is CORS? CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. Shortly, It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain. For example, only the allowed domains will be able to access hosted files in a server such as a stylesheet, image, or a script.</p>
        </div>
        <div className='blog-card mb-5'>
          <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
          <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. We have some alternative of firebase authentication. Like, custom database using mongodb, Auth0, Okta, etc</p>
        </div>
        <div className='blog-card mb-5'>
          <h5>How does the private route work?</h5>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated that means if the user is logged in. </p>
        </div>
        <div className='blog-card mb-5'>
          <h5>What is Node? How does Node work?</h5>
          <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;