import { React } from 'react';
import { HighestEarningCard } from '../components/HighestEarningCard';
import { PopularCard } from '../components/PopularCard';
import { WelcomeCard } from '../components/WelcomeCard';

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