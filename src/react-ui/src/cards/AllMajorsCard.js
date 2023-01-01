import { React, useState, useEffect} from 'react';
import { Link } from "react-router-dom";


export const AllMajorsCard = () => {

    const [majors, setMajors] = useState([]);


    const getMajors = () => {
        fetch(`http://localhost:8080/majorsByName`, {})
        .then((response) => response.json())
        .then((data) => setMajors(data))
      }
      useEffect(() => {
          getMajors();
        }, []); 


    

    const sorting = (option) => {
        if (option === "Median Salary") {
            const myData = [].concat(majors).sort((a, b) => b.medianSalary > a.medianSalary ? 1 : -1);
            return myData;
        }
        else if (option === "Popularity") {
            const myData = [].concat(majors).sort((a, b) => b.total > a.total ? 1 : -1);
            return myData;
        }
        else if (option === "Lowest Unemployment") {
            const myData = [].concat(majors).sort((a, b) => a.unemploymentRate > b.unemploymentRate ? 1 : -1);
            return myData;
        }
        else if (option === "Highest Unemployment") {
            const myData = [].concat(majors).sort((a, b) => b.unemploymentRate > a.unemploymentRate ? 1 : -1);
            return myData;
        }
        else if (option === "Total Employed") {
            const myData = [].concat(majors).sort((a, b) => b.employed > a.employed ? 1 : -1);
            return myData;
        }
        else if (option === "Alphabetical Order") {
            const myData = [].concat(majors).sort((a, b) => a.name > b.name ? 1 : -1);
            return myData;
        }
    }
    
    
    return (
        <div id='all-majors-card' className="px-20 bg-card-dark m-5 text-white p-10 rounded-2xl mb-5 tracking-wide flex flex-col items-center justify-center">
            <div id='majors-list' className='w-4/5 border rounded-xl p-5'>

                <div id='title-section' className='flex justify-between items-end mb-8'>
                    <h1 className='p-3 text-center'>Results</h1>
                    <div id='filter-bar' className='text-lg flex gap-5 mb-5'>

                        <select className="w-full bg-dark p-1 rounded-xl" 
                            onChange={(e) => {
                                const selected = e.target.value;
                                setMajors(sorting(selected));
                            }}>
                            <option value={"Alphabetical Order"}>Alphabetical Order</option>
                            <option value={"Median Salary"}>Median Salary (High to Low)</option>
                            <option value={"Popularity"}>Popularity (High to Low)</option>
                            <option value={"Lowest Unemployment"}>Unemployment (Low to High)</option>
                            <option value={"Highest Unemployment"}>Unemployment (High to Low)</option>
                            <option value={"Total Employed"}>Total People Employed (High to Low)</option>

                        </select>

                    </div>
                </div>

                {
                    majors.map((maj) => {
                        return  <Link to={`/major/${maj.name}`}>
                                    <div className='flex text-lg my-3 hover:text-cyan-400 transition-all px-3'>
                                        <h2>{maj.name}</h2>
                                    </div>
                                </Link>
                    })
                    
                }
            </div>
        </div>
    );
}