import { React } from 'react';
import { ForumCard } from '../cards/ForumCard';
import { ReactComponent as Logo } from './../Assets/Logo-Large.svg';

export const ForumPage = () => {


  return (
    <div id='Forum-Page' className='flex flex-col text-5xl bg-dark-bg min-h-screen w-full tracking-wider'>

      <div id='forum-welcome-card' className="flex bg-card-dark m-5 text-white p-20 rounded-3xl">
        <div id='title' className='w-4/5'>
          <h1 className='text-7xl py-5 text-left'>MajorStatistics Forum</h1>
          <p className='text-2xl pb-5 text-neutral-500 text-left w-4/5'>Feel free to share your thoughts and experiences about the different undergraduate majors!</p>
        </div>
        <div id='logo' className='flex items-center justify-center w-1/2'>
          <Logo className='h-full pl-20'/>
        </div>
      </div>

      <ForumCard/>

    </div>

  );
}