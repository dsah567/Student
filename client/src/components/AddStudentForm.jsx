import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStud } from "../features/studentSlice";

const AddStudentForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    courses: "",
    dateJoined: "",
    lastLogin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.cohort ||
      !formData.courses ||
      !formData.dateJoined ||
      !formData.lastLogin
    ) {
      alert("All fields are required!");
      return;
    }
    
    dispatch(
      addStud({
        name: formData.name,
        cohort: formData.cohort,
        course: formData.courses,
        dateJoined: formData.dateJoined,
        lastLogin: formData.lastLogin,
      })
    );


    setFormData({
      name: "",
      cohort: "",
      courses: "",
      dateJoined: "",
      lastLogin: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Add New Student</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Student Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter student name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cohort" className="block text-sm font-medium">
          Cohort
        </label>
        <input
          type="text"
          id="cohort"
          name="cohort"
          value={formData.cohort}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter cohort"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="courses" className="block text-sm font-medium">
          Courses
        </label>
        <input
          type="text"
          id="courses"
          name="courses"
          value={formData.courses}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter courses "
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateJoined" className="block text-sm font-medium">
          Date Joined
        </label>
        <input
          type="date"
          id="dateJoined"
          name="dateJoined"
          value={formData.dateJoined}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastLogin" className="block text-sm font-medium">
          Last Login
        </label>
        <input
          type="date"
          id="lastLogin"
          name="lastLogin"
          value={formData.lastLogin}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;
