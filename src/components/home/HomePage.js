import React from 'react';

const HomePage = () => (
  <div className="container">
    <div className="starter-template">
      <h1>Gateway International</h1>
      <img src={process.env.PUBLIC_URL + "/gateway.jpg"}/>
      <p className="lead">
        Use this app to Create your tasks.<br />
        Built using React + Redux + Bootstrap
      </p>
    </div>
  </div>
);

export default HomePage;
