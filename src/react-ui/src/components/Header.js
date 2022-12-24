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
            <ul className='flex list-none text-cyan-500 text-l'>
              <li className='m-3'>Home</li>
              <li className='m-3'>Contact</li>
              <li className='m-3'>About</li>
            </ul>
        </div>

    </div>
  );
}