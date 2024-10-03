import { collegeDataRequest } from '@/redux/collegeData';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CollegeCard() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(collegeDataRequest());
  }, [dispatch]);

  const { college } = useSelector((state) => state.collegeData);

  // Filter colleges by name based on the search input
  const filteredColleges = college?.filter((item) =>
    item?.college_name?.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <form className="flex w-full gap-1 mb-7 mt-3">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="w-full h-[45px] px-[15px] outline-none border rounded-[10px]"
          placeholder="Search by College Name"
          type="text"
        />
      </form>
      <div>
        <div className={` ${!filteredColleges?.length ?  "grid  grid-cols-1  gap-5" : "grid grid-cols-1 lg:grid-cols-2  gap-5"}`}>
          {filteredColleges && filteredColleges.length > 0 ? (
            filteredColleges.map((items, index) => (
              <div key={index} className="border hover:shadow-lg hover:shadow-blue-500 transition duration-500 rounded-lg  shadow-md w-full p-4 m-auto">
                <h2 className="text-lg text-[#25bdea] break-all font-bold mb-3">{items?.college_name}</h2>
                <div className="flex justify-between items-start">
                  <div className="relative">
                    <div className='w-[150px] '>

                    <img
                      src={items?.image}
                      alt={items?.college_name}
                      className=" rounded-md"
                      />
                      </div>
                    <div className="flex items-center absolute top-0">
                      <span className="text-xs text-black bg-yellow-200 px-2 py-1 rounded-sm">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex md:flex-row flex-col md:items-center gap-3 2xl:gap-5">
                    <div className="text-sm flex items-center gap-2 text-gray-500">
                    <img src="/images/location.png" alt="" />
                      <h2 className="text-sm text-gray-500">
                        {items?.district}, {items?.state}
                      </h2>
                    </div>
                    <div className="text-sm flex items-center gap-2 text-gray-500">
                      <img src="/images/flag.png" alt="" />
                      <h2 className="text-sm text-gray-500">{items?.type}</h2>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <div className=" font-bold text-gray-700 text-sm">Minority</div>
                    <div className="">{items?.minority ? items?.minority   :"null" }</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className=" font-bold text-gray-700 text-sm">Level</div>
                    <div className="">{items?.level ? items?.level :"null"}</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className=" font-bold text-gray-700 text-sm">Women</div>
                    <div className="">{items?.women ? items?.women :"null"}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center m-auto  flex items-center justify-center h-[200px] w-full text-gray-500 my-5">
              No colleges found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
