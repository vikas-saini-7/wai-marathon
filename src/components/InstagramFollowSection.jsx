import React from 'react';
import InstagramFollowButton from './InstagramFollowButton';
import CheckSection from './CheckSection';

const InstagramFollowPage = () => {

    const followers = ['user1', 'user2', 'user3', 'user4'];
    
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-4">Follow Us on Instagram</h1>
      <p className="text-gray-600 text-lg mb-8">
        To access the link below, please follow our Instagram page.
      </p>
      

      <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded flex items-center space-x-2 hover:from-purple-600 hover:to-red-600 hover:underline"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 7h4m-2-2h2M7 6h8a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z"
        />
      </svg>
      <span>Follow us on Instagram</span>
    </a>
    

      <CheckSection followers={followers} />

      {/* <p className="mt-8 text-gray-600 text-lg">
        After following, you'll be able to access the link below.
      </p>

      <InstagramFollowButton/> */}
    </div>
  );
};

export default InstagramFollowPage;
