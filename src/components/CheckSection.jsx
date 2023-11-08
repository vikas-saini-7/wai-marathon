import React, {useState} from 'react'
import InstagramFollowButton from './InstagramFollowButton';

const CheckSection = ({followers}) => {
  const [username, setUsername] = useState('');
  const [isFollowig, setIsFollowig] = useState(false);

  // Simulated list of usernames
  const usernameList = followers;

  const checkUsername = () => {
    setIsFollowig(usernameList.includes(username));
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-16">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Enter Your Username to get link:
      </label> */}
      <div className="flex">
        <input
          id="username"
          className="appearance-none w-2/3 bg-gray-200 text-gray-700 border border-gray-300 rounded-l py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="w-2/5 bg-green-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
          onClick={checkUsername}
        >
          <div>Get Access</div>
        </button>
      </div>
      {/* {isFollowig && (
        <p className="text-green-500 mt-2">Congratulations!</p>
      )} */}
      {/* {!isFollowig && username !== '' && (
        <p className="text-red-500 mt-2">Username does not exist in the list.</p>
      )}
      {!isFollowig && username !== '' && (
        <p className="text-red-500 mt-2">After following, you'll be able to access the link below.</p>
      )} */}


      {/* {isFollowig ? (
        <div className='text-center'>
            <p className="mt-8 text-gray-600 text-lg">
                After following, you'll be able to access the link below.
            </p>

            <InstagramFollowButton isFollowig={isFollowig} />
        </div>
      ) : (
        <div className='text-center'>
          <div className='mt-4 text-red-500 text-center'>Note : Follow Wai Marathon Instagram page to download your images</div>
          <InstagramFollowButton isFollowig={isFollowig} />
        </div>
      )} */}
      <div className='text-center mt-4'>
        {isFollowig ? (
          <>
            <p className='text-green-700'>Thanks for following our page! Follow below link.</p>
            <button className='bg-blue-500 text-white py-2 px-4 mt-4 rounded'>Download Photos</button>
          </>
        ) : (
          <>
            <p className='text-red-700'>Below link will be activated after you follow our account</p>
            <button disabled className='bg-blue-500 text-white py-2 px-4 mt-4 rounded opacity-50 cursor-not-allowed'>Download Photos</button>
          </>
        )}
      </div>
    </div>
  )
}

export default CheckSection