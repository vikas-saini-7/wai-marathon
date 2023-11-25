import React from 'react';
import MainButton from './MainButton';

const InstagramFollowPage = () => {

    const followers = ['user1', 'user2', 'user3', 'user4'];
    
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img className='mb-16' src="./images/main.png" alt="" />
      <h1 className="text-3xl md:text-4xl md:text-5xl font-semibold mb-8 text-center p-2">Follow on Instagram</h1>
      
      <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded flex items-center space-x-2 hover:from-purple-600 hover:to-red-600 hover:underline"
      >
        <img src="./images/instagram.svg" alt="" />
        <span>Follow Wai Marathon</span>
      </a>
      <MainButton/>
    </div>
  );
};

export default InstagramFollowPage;
