import { React } from 'react';
import { MajorStatsCard } from '../components/MajorStatsCard';

export const MajorPage = () => {
  return (
    <div id='major-page' className="text-5xl bg-neutral-900 min-h-screen">
        
        <h1 className='w-full text-center text-neutral-100'>Major Page</h1>

        <div>
            <MajorStatsCard/>
        </div>


    </div>


  );
}
