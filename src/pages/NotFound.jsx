import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      class="
    flex
    items-center
    justify-center
    h-1/2 
   mt-10
  "
    >
      <div class="px-40 py-20 ">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-white text-9xl ">404</h1>

          <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span class="text-orange-500">Oops!</span>
          </h6>

          <p class="mb-8 text-center text-gray-400 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <button class="btn btn-active btn-outline">
            <Link to="/" class="px-6 py-2 text-sm font-semibold ">
              Go home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
