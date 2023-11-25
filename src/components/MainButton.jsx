import React, { useState } from 'react';

const MainButton = () => {
    const [isFollowing, setIsfollowing] = useState(false);
    const checkbox = document.getElementById('check');
    
    const handleCheck = () => {
        setIsfollowing(!isFollowing);
    }
  return (
    <div className='mt-16 flex flex-col gap-8 select-none'>
        <div className='flex items-center'>
            <input type="checkbox" name="check" id="check" className='cursor-pointer' onClick={handleCheck} />
            <label for='check' className='pl-2 cursor-pointer'>I have followed the Page</label>
        </div>
        {
            isFollowing ?
            <a href="https://www.google.com" target='_blank'  className='w-auto text-center'>
                <p className='bg-blue-400 text-white px-4 py-3 rounded-md'>Download Images</p>
            </a>
            :
            <a href="#" className='w-auto text-center'>
                <p disabled className='bg-blue-400 text-white px-4 py-3 rounded-md opacity-50 cursor-not-allowed'>Download Images</p>
            </a>
        }
    </div>
  )
}

export default MainButton