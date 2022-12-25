import { React } from 'react';

// icons 
import { ReactComponent as Home } from './../Assets/home.svg';
import { ReactComponent as Category } from './../Assets/category.svg';
import { ReactComponent as Forum } from './../Assets/forum.svg';
import { ReactComponent as All } from './../Assets/all.svg';

/**
 * Header Component
 */

export const Sidebar = () => {
  return (
    <div id='sidebar' className="flex flex-col w-full border-solid bg-card-dark w-48 py-3 text-white pt-10 tracking-wider">

        <input type="text" placeholder="Search Major.." name="search" className='my-5 bg-dark border border-solid rounded-md p-1 m-2'/>
        <button type="submit"><i class="fa fa-search"></i></button>
        
        <div id='items-container' className='text-l'>
          <div id='sidebar-item' className='p-2 border-r-2 flex'>
            <Home className='fill-white'/>
            <h2 className='ml-1'>Home</h2>
          </div>
          <div id='sidebar-item' className='p-2 flex text-neutral-400'>
            <Category className='fill-neutral-400'/>
            <h2 className='ml-1'>Categories</h2>
          </div>
          <div id='sidebar-item' className='p-2 flex text-neutral-400'>
            <All className='fill-neutral-400'/>
            <h2 className='ml-1'>All Majors</h2>
          </div>
          <div id='sidebar-item' className='p-2 flex text-neutral-400'>
            <Forum className='fill-neutral-400'/>
            <h2 className='ml-1'>Forum</h2>
          </div>

        </div>

    </div>
  );
}