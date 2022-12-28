import { React, useState, useEffect } from 'react';
import { MajorStatsCard } from '../cards/MajorStatsCard';
import { RelatedMajorsCard } from '../cards/RelatedMajorsCard';
import { useParams } from 'react-router-dom';
import { HighestEarningCard } from '../cards/HighestEarningCard';


export const MajorPage = () => {

  const [major, setMajor] = useState("");
  const { majorName } = useParams();

  const getMajor = () => {
    fetch(`http://localhost:8080/majorByName/${majorName}`)
    .then((response) => response.json())
    .then((data) => setMajor(data))
  }

  useEffect(() => getMajor()); 

  return (
    <div id='major-page' className="text-5xl bg-dark-bg min-h-screen w-full flex flex-col">
        <div>
            <MajorStatsCard major={major}/>
            <div className='flex mb-20'>
              <RelatedMajorsCard key={major.id} category={major.category}/>
              <HighestEarningCard/>
            </div>


        </div>


    </div>


  );
}
