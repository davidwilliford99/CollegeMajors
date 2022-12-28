import { React } from 'react';

export const WelcomeCard = () => {
  return (
    <div id='welcome-card' className="flex flex-col items-center justify-center bg-card-dark my-10 mx-28 text-white p-10 rounded-3xl">
      <h1 className='text-5xl py-5 text-center'>Welcome to Major Statistics!</h1>
      <p className='text-2xl pb-5 text-neutral-500 text-center 2xl:w-1/2'>This web application displays information and statistcs from various undergraduate majors. The data has been pulled from a survey in the US, containing millions of participants.</p>
    </div>
  );
}