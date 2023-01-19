import { React, useState, useEffect } from 'react';
import { PopularChart } from '../components/PopularChart';


export const PopularCard = () => {

  /**
   * API Call to retrieve the top 10 paying majors
   */
  const [majors, setMajors] = useState([]);

  const getMajors = () => {
    fetch(`http://localhost:8080/top10PopularMajors`, {})
    .then((response) => response.json())
    .then((data) => setMajors(data))
  }
  useEffect(() => {
      getMajors();
    }, []
  ); 

      
  return (

    <div id='highest-earning-card' className="w-full bg-card-dark mx-5 mb-5 text-white p-10 rounded-2xl tracking-wide">
      <h1 className='text-center'>Most Popular Majors</h1>
      <p className='text-center text-lg text-neutral-500 my-5'>Sorted by survey responses<br></br>Hover (or click) the chart to see major details</p>

      {/* Bar Graph SVG */}
      <div id='bar-graph-container' className='h-3/4 flex items-center justify-center'>
        <PopularChart majors={majors} className='overflow-hidden'/>
      </div>

    </div>
  );
}