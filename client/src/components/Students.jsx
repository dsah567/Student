import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/studentSlice";

const Students = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.studentData);

  useEffect(() => {
    dispatch(fetchStudents("http://localhost:8000/students"));
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }


  return (
    <div className="overflow-auto">
      
      
      <div className="w-full md:w-4/5 p-4">
        <header className="flex justify-between items-center mb-4">
          
          <select className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-300">
            <option>AY 2024-25</option>
            <option>AY 2023-24</option>
          </select>
          <select className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-300">
            <option>CBSE 9 Science</option>
            <option>CBSE 9 Math</option>
          </select>

          <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            + Add New Student
          </button>
        </div>
        </header>
        {/* Table */}
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Student Name</th>
              <th className="border px-4 py-2">Cohort</th>
              <th className="border px-4 py-2">Courses</th>
              <th className="border px-4 py-2">Date Joined</th>
              <th className="border px-4 py-2">Last Login</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dt) => (
              <tr key={dt.id}>
                <td className="border px-4 py-2">{dt.name}</td>
                <td className="border px-4 py-2">{dt.cohort}</td>
                <td className="border px-4 py-2">
                  {dt.course}
                </td>
                <td className="border px-4 py-2">{dt.dateJoined}</td>
                <td className="border px-4 py-2">{dt.lastLogin}</td>
                <td
                  className={`border px-4 py-2 
                   text-green-500`
                 }
                >
                  ● 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default Students;