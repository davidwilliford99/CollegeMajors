import { React, useState, useEffect} from 'react';
import { Link } from "react-router-dom";

/**
 * This copmonent uses the map method to iterate over a list 
 * The map method takes in an arrow function as a parameter
 * This arrow function transforms the list to our liking to display
 */


export const RelatedMajorsCard = (props) => {

    const category = props.category;
    const [majors, setMajors] = useState([]);

    const getMajors = () => {
      fetch(`http://localhost:8080/majorByCategory/${category}`, {})
      .then((response) => response.json())
      .then((data) => setMajors(data))
    }
    useEffect(() => {
        getMajors();
      }); 


    
    return (
        <div id='related-majors-card' className="px-20 bg-card-dark mx-5 text-white p-10 rounded-2xl w-full mb-5 tracking-wide">

            <div id='title' className='flex justify-between items-center'>
                <h1 className='mb-10'>Similar Majors</h1>
                <h1 className='text-lg h-full'>Median Salary</h1>
            </div>


            <div id='similar-majors-list'>
                {
                    majors.map((maj) => {
                        return  <Link to={`/major/${maj.name}`}>
                                    <div className='flex text-sm 2xl:text-lg justify-between m-3 hover:text-cyan-400 transition-all'>
                                        <h2>{maj.name}</h2>
                                        <h2>${maj.medianSalary}</h2>
                                    </div>
                                </Link>
                    })
                    
                }
            </div>
        </div>
    );
}