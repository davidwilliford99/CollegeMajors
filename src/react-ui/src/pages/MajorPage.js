import { React, useState } from 'react';
import { MajorStatsCard } from '../cards/MajorStatsCard';
import { RelatedMajorsCard } from '../cards/RelatedMajorsCard';


export const MajorPage = () => {

  const [major, setMajor] = useState("");

  const getMajor = () => {
    fetch('http://localhost:8080/majorById/43')
    .then((response) => response.json())
    .then((data) => setMajor(data))
  }
  getMajor();

  return (
    <div id='major-page' className="text-5xl bg-dark-bg min-h-screen w-full flex flex-col">
        <div>
            <MajorStatsCard major={major}/>
            <div>
              <RelatedMajorsCard category={major.category}/>
            </div>


        </div>


    </div>


  );
}
