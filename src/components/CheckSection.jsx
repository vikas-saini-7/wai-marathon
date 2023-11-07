import React, {useState} from 'react'
import InstagramFollowButton from './InstagramFollowButton';

const CheckSection = ({followers}) => {
    const [username, setUsername] = useState('');
  const [isUsernameExists, setIsUsernameExists] = useState(false);

  // Simulated list of usernames
  const usernameList = followers;

  const checkUsername = () => {
    setIsUsernameExists(usernameList.includes(username));
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-16">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Enter Your Username to get link:
      </label>
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
      {isUsernameExists && (
        <p className="text-green-500 mt-2">Username exists in the list.</p>
      )}
      {!isUsernameExists && username !== '' && (
        <p className="text-red-500 mt-2">Username does not exist in the list.</p>
      )}

      {isUsernameExists ? (
        <>
            <p className="mt-8 text-gray-600 text-lg">
                After following, you'll be able to access the link below.
            </p>

            <InstagramFollowButton/>
        </>
      ) : (
        <div className='mt-4 text-red-500 text-center'>First Follow then link will be shown</div>
      )}
    </div>
  )
}

export default CheckSection