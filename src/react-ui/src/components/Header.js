import { React } from 'react';
import { ReactComponent as Logo } from './../Assets/Logo.svg';

/**
 * Header Component
 */

export const Header = () => {
  return (
    <div id='header' className="flex justify-between w-full bg-dark h-28 p-5">

        <div id='header-left'>
            <Logo className='h-full'/>
        </div>

        <div id='header-right'>
            <ul className='flex list-none text-white text-l h-full'>
              <li className='p-3 mt-10'>Home</li>
              <li className='p-3 mt-10'>Contact</li>
              <li className='p-3 mt-10'>About</li>
            </ul>
        </div>

    </div>
  );
}