import React from 'react';

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4"> Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        {' '}
        A React App to search Github users and see Profile Details.{' '}
      </p>
      <p className="text-gray-400 text-lg">
        Version : <span className="text-white">1.0.0</span>
      </p>
      <p className="text-gray-400 text-lg">
        Contact :{' '}
        <span className="text-white">
          {' '}
          <a href="https://twitter.com/kartik_im">@kartik_im</a>{' '}
        </span>
      </p>
    </div>
  );
}

export default About;
