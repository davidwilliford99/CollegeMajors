import { React, useState } from 'react';
import { CategoryMajorsCard } from '../cards/CategoryMajorsCard';

export const CategoriesPage = () => {

  const [category, setCategory] = useState("Business");

  /**
   * I did it like this because my internet was down and couldn't Google 
   * the correct way to do this in the API
   */
  const categories = [ 
                        "Agriculture & Natural Resources",
                        "Biology & Life Science",
                        "Engineering",
                        "Humanities & Liberal Arts",
                        "Communications & Journalism",
                        "Computers & Mathematics",
                        "Industrial Arts & Consumer Services",
                        "Education",
                        "Law & Public Policy",
                        "Health",
                        "Social Science",
                        "Physical Sciences",
                        "Psychology & Social Work",
                        "Arts",
                        "Business"
                        ];


  return (
    <div id='categories-page' className="flex flex-col text-5xl bg-dark-bg min-h-screen w-full tracking-wider">

      <div id='title-card' className='flex flex-col bg-card-dark m-5 mb-0 text-white px-20 py-10 rounded-3xl'>
        <h1 className='text-6xl text-center'>Majors by Category</h1>
      </div>


        <div id='categories-card' className='flex flex-col bg-card-dark m-5 text-white px-20 py-10 rounded-3xl'>
          <div id='main-contnent' className='flex'>

            <div id='options' className='w-1/5'>
              {
                categories.map((cat) => {
                  return <div className='flex text-sm justify-between text-cyan-400 border-2 border-cyan-600 cursor-pointer rounded-lg 
                                         hover:bg-cyan-600 hover:text-neutral-300 transition' 
                              onClick={() => setCategory(cat)}>
                            <h2 className='m-3'>{cat}</h2>
                        </div>
                })
              }
            </div>

            <CategoryMajorsCard category={category}/>
          </div>



        </div>      
    </div>
  );
}