import { React } from 'react';
import { ReactComponent as Logo } from './../Assets/Logo.svg';

/**
 * Header Component
 */

export const Header = () => {
  return (
    <div id='header' className="flex justify-between w-full bg-dark h-20 p-2 pt-4">

        <div id='header-left'>
            <Logo className='h-full'/>
        </div>

        <div id='header-right'>
            <ul className='flex list-none text-neutral-400 text-l h-full'>
              <li className='m-3 mr-10 mt-7'>Home</li>
              <li className='m-3 mr-10 mt-7'>Contact</li>
              <li className='m-3 mr-10 mt-7'>About</li>
            </ul>
        </div>

    </div>
  );
}