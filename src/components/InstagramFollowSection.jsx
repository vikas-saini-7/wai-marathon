import React from 'react';
import InstagramFollowButton from './InstagramFollowButton';
import CheckSection from './CheckSection';

const InstagramFollowPage = () => {

    const followers = ['user1', 'user2', 'user3', 'user4'];
    
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img className='mb-16' src="./images/main.png" alt="" />
      <h1 className="text-4xl font-semibold mb-4">Follow Us on Instagram</h1>
      <p className="text-gray-600 text-lg mb-8">
        To access the link, please follow our Instagram page.
      </p>
      

      <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded flex items-center space-x-2 hover:from-purple-600 hover:to-red-600 hover:underline"
    >
      <img src="./images/instagram.svg" alt="" />
      <span>Follow Wai Marathon</span>
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
