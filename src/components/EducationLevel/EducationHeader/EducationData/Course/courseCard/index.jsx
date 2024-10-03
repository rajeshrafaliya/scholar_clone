
import React, { useEffect, useState } from 'react';
import { CoursesDataRequest } from '@/redux/coursesData';
import { useDispatch, useSelector } from 'react-redux';

function CourseCard() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  
  // Access the data from the Redux store
  const { coursesDatas } = useSelector((state) => state.coursesData);

  // Fetch courses data on component mount
  useEffect(() => {
    dispatch(CoursesDataRequest());
  }, [dispatch]);

  // Filter courses based on the search input
  const filteredColleges = coursesDatas?.filter((item) =>
    item?.course_name?.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className=''>
      <form className="flex w-full gap-1 mb-7 mt-3">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="w-full h-[45px] px-[15px] outline-none border rounded-[10px]"
          placeholder="Search by course Name"
          type="text"
        />
      </form>
      <div className='mb-10'>
        <div className={` ${!filteredColleges?.length ? "grid grid-cols-1 gap-5" : "grid grid-cols-1 lg:grid-cols-2 gap-5"}`}>
          {filteredColleges && filteredColleges.length > 0 ? (
            filteredColleges.map((item, index) => (
              <div key={index} className="border hover:shadow-lg hover:shadow-blue-500 transition duration-500 rounded-lg shadow-md w-full p-4 m-auto">
                <h2 className="text-lg text-[#25bdea] font-bold mb-3">{item?.course_name}</h2>
                <div className='grid grid-cols-2 gap-3'>  
                  <div className='border py-2 px-3'> 
                    <h2 className='text-sm font-semibold text-gray-400'>Course Level</h2>
                    <h2 className='text-sm mt-1'>{item?.course_level}</h2>
                  </div>
                  <div className='border py-2 px-3'> 
                    <h2 className='text-sm font-semibold text-gray-400'>Programme Name</h2>
                    <h2 className='text-sm mt-1'>{item?.programme}</h2>
                  </div>
                  <div className='border py-2 px-3'> 
                    <h2 className='text-sm font-semibold text-gray-400'>Course Type</h2>
                    <h2 className='text-sm mt-1'>{item?.course_type}</h2>
                  </div>
                  <div className='border py-2 px-3'> 
                    <h2 className='text-sm font-semibold text-gray-400'>Course Fees</h2>
                    <h2 className='text-sm mt-1'>{item?.course_fees}</h2>
                  </div>
                </div>
                <div>
                 <p className='my-2'>{item?.description}</p> 
                </div>
              </div>
            ))) :(

                <div className="text-center m-auto flex items-center justify-center h-[200px] w-full text-gray-500 my-5">
              No course found.
            </div> 
            )
          } 
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
