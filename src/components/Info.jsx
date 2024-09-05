import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {reduxAge, reduxSex, reduxWeight, reduxHeight, reduxStressed} from "../app/infoSlice"
import { Link } from 'react-router-dom';

const FormWithSliders = () => {

  const dispatch = useDispatch()
  const sex = useSelector((state) => state.info.value.sex)
  const stressed = useSelector((state) => state.info.value.stressed)
  const age = useSelector((state) => state.info.value.age)
  const height = useSelector((state) => state.info.value.height)
  const weight = useSelector((state) => state.info.value.weight)
  

  const [errors, setErrors] = useState({
    gender: false,
    feeling: false,
  });

  const handleSex = (e) => {
    const { name, value } = e.target;
    dispatch(reduxSex(value))

 
    if (name === 'gender' || name === 'feeling') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: value === '' }));
    }
  };
  const handleMood = (e) => {
    const { name, value } = e.target;
    dispatch(reduxStressed(value))

 
    if (name === 'feeling') {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: value === '' }));
    }
  };
  const handleAge = (e) => {
    const { name, value } = e.target;
    dispatch(reduxAge(value))

  };
  const handleWeight = (e) => {
    const { name, value } = e.target;
    dispatch(reduxWeight(value))

  };
  const handleHeight = (e) => {
    const { name, value } = e.target;
    dispatch(reduxHeight(value))

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newErrors = {
      gender: formData.gender === '',
      feeling: formData.feeling === '',
    };

    setErrors(newErrors);

   
    if (!newErrors.gender && !newErrors.feeling) {
      console.log('Form submitted:', formData);
     
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="gender" className="block text-xl font-medium">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={sex}
            onChange={handleSex}
            className={`border p-2 w-full ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500">Please select a gender.</p>}
        </div>

        <div>
          <label htmlFor="feeling" className="block text-xl font-medium">
            What are you feeling:
          </label>
          <select
            id="feeling"
            name="feeling"
            value={stressed}
            onChange={handleMood}
            className={`border p-2 w-full ${errors.feeling ? 'border-red-500' : 'border-gray-300'}`}
            required
          >
            <option value="">Select Feeling</option>
            <option value="happy">Happy</option>
            <option value="stressed">Stressed</option>
          </select>
          {errors.feeling && <p className="text-red-500">Please select how you are feeling.</p>}
        </div>

        <div>
          <label htmlFor="age" className="block text-xl font-medium">
            Age: {age} years
          </label>
          <input
            type="range"
            id="age"
            name="age"
            min="0"
            max="100"
            value={age}
            onChange={handleAge}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="height" className="block text-xl font-medium">
            Height: {height} cm
          </label>
          <input
            type="range"
            id="height"
            name="height"
            min="50"
            max="250"
            value={height}
            onChange={handleHeight}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-xl font-medium">
            Weight: {weight} kg
          </label>
          <input
            type="range"
            id="weight"
            name="weight"
            min="20"
            max="200"
            value={weight}
            onChange={handleWeight}
            className="w-full"
          />
        </div>

        <Link to="home">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
};

export default FormWithSliders;
