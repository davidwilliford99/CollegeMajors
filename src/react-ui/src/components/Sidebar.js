import { React } from 'react';

/**
 * Header Component
 */

export const Sidebar = () => {
  return (
    <div id='sidebar' className="flex flex-col w-full border-solid bg-card-dark w-48 py-3 text-white pt-10">

        <input type="text" placeholder="Search Major.." name="search" className='my-5 bg-dark border border-solid rounded-md p-1 m-2'/>
        <button type="submit"><i class="fa fa-search"></i></button>
        
        <div id='sidebar-item' className='p-2 border-r-2'>Home Page</div>
        <div id='sidebar-item' className='p-2'>Categories</div>
        <div id='sidebar-item' className='p-2'>All Majors</div>
        <div id='sidebar-item' className='p-2'>Forum</div>
    </div>
  );
}