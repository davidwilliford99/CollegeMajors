import { React, useState, useEffect } from 'react';
import { HighestEarningChart } from '../components/HighestEarningChart';


export const HighestEarningCard = () => {

  /**
   * API Call to retrieve the top 10 paying majors
   */
  const [majors, setMajors] = useState([]);

  const getMajors = () => {
    fetch(`http://localhost:8080/top10PayingMajors`, {})
    .then((response) => response.json())
    .then((data) => setMajors(data))
  }
  useEffect(() => {
      getMajors();
    }, []
  ); 

      
  return (

    <div id='highest-earning-card' className="w-full bg-card-dark mr-5 mb-5 text-white p-10 rounded-2xl tracking-wide">
      <h1 className='text-center'>Highest Earning Majors</h1>
      <p className='text-center text-lg text-neutral-500 my-5'>Sorted by median salary<br></br>Hover (or click) the chart to see major details</p>

      {/* Bar Graph SVG */}
      <div id='bar-graph-container' className='h-3/4 flex items-center justify-center'>
        <HighestEarningChart majors={majors} className='overflow-hidden'/>
      </div>

    </div>
  );
}