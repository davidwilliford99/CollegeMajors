import { React } from 'react';
import { ReactComponent as Cap } from './../Assets/cap.svg';



export const MajorStatsCard = (props) => {

  const major = props.major;

  return (
    <div id='major-stats-card' className="text-3xl 2xl:text-5xl bg-card-dark text-white m-5 p-10 rounded-3xl tracking-wider">
      <div id='title' className='flex mx-20'>
        <h1>{major.name}</h1>
        <Cap className='ml-3'/>
      </div>

      <p className='mx-20 text-xl text-neutral-400 my-2'>Category: {major.category}</p>

      <div id='stats' className='flex flex-col text-xl text-neutral-300 border-2 rounded-xl p-10 mx-20 my-10'>

        <h1 className='mb-5 text-3xl text-white text-center'>Stats</h1>

        <div id='stats' className='w-full flex flex-col items-center justify-center'>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between my-1.5'>
            <p>Total Surveyed:</p><p>{major.total}</p>
          </div>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between my-1.5'>
            <p>Median Salary:</p><p>${major.medianSalary}</p>
          </div>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between my-1.5'>
            <p>Unemployment Rate:</p><p>{(Math.round((major.unemploymentRate) * 1000) / 10)}%</p>
          </div>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between my-1.5'>
            <p>Total Unemployed:</p><p>{major.unemployed}</p>
          </div>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between my-1.5'>
            <p>P25 Salary:</p><p>${major.p25Salary}</p>
          </div>
          <div id='stat' className='flex w-full 2xl:w-1/4 justify-between'>
            <p>P75 Salary:</p><p>${major.p75Salary}</p>
          </div>
        </div>


      </div>
      <p></p>
    </div>
  );
}