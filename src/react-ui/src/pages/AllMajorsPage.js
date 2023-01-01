import { React } from 'react';
import { AllMajorsCard } from '../cards/AllMajorsCard';

export const AllMajorsPage = () => {


  return (
      <div id='allMajorsPage' className='w-full flex flex-col text-5xl bg-dark-bg min-h-screen tracking-wider'>

        <div id='title-card' className='flex flex-col bg-card-dark m-5 mb-0 text-white px-20 py-10 rounded-3xl'>
            <h1 className='text-6xl text-center'>Browse All Majors</h1>
        </div>

        <div>
            <AllMajorsCard/>
        </div>

      </div>
  );
}