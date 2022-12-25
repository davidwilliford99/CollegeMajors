import { React } from 'react';
import { HighestEarningCard } from '../cards/HighestEarningCard';
import { PopularCard } from '../cards/PopularCard';
import { WelcomeCard } from '../cards/WelcomeCard';

export const WelcomePage = () => {
  return (
    <div id='welcome-page' className="text-5xl bg-dark-bg min-h-screen w-full">
      <WelcomeCard/>
      
      <div className='flex justify-between'>
        <PopularCard/>
        <HighestEarningCard/>
      </div>
    </div>
  );
}