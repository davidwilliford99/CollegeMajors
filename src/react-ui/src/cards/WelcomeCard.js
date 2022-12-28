import { React } from 'react';
import { ReactComponent as Logo } from './../Assets/Logo-Large.svg';

export const WelcomeCard = () => {
  return (
    <div id='welcome-card' className="flex bg-card-dark m-5 text-white p-20 rounded-3xl">
      <div id='title' className='w-4/5'>
        <h1 className='text-7xl py-5 text-left'>Welcome to Major Statistics!</h1>
        <p className='text-2xl pb-5 text-neutral-500 text-left w-4/5'>This web application displays information and statistcs from various undergraduate majors. The data has been pulled from a survey in the US, containing millions of participants.</p>
      </div>
      <div id='logo' className='flex items-center justify-center w-1/2'>
        <Logo className='h-full pl-20'/>
      </div>
    </div>
  );
}