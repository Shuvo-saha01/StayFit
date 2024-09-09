import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {reduxInput1, reduxInput2, reduxInput3, reduxInput4, reduxInput5, reduxInput6, reduxInput7, reduxInput8, reduxInput9, reduxInput10} from "../app/mentalSlice"

function MentalQuestion() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);
  const [input6, setInput6] = useState(0);
  const [input7, setInput7] = useState(0);
  const [input8, setInput8] = useState(0);
  const [input9, setInput9] = useState(0);
  const [input10, setInput10] = useState(0);

  const dispatch = useDispatch()

  const range = (num) => {
    if(num === 0){
      return 3
    }
    else if(num<4 && num>0){
      return 0;
    }else if (num>3 && num<7){
      return 1;
    }else{
      return 2;
    }
  }
  const onSubmit = () => {
    dispatch(reduxInput1(range(input1)))
    dispatch(reduxInput2(range(input2)))
    dispatch(reduxInput3(range(input3)))
    dispatch(reduxInput4(range(input4)))
    dispatch(reduxInput5(range(input5)))
    dispatch(reduxInput6(range(input6)))
    dispatch(reduxInput7(range(input7)))
    dispatch(reduxInput8(range(input8)))
    dispatch(reduxInput9(range(input9)))
    dispatch(reduxInput10(range(input10)))
  }

  return (
    <div id="body" className="flex justify-center items-center flex-col">
      <div className="text-3xl font-semibold ml-2">
        <h1 className="text-center my-5 text-4xl font-bold">
          Rate yourself on these questions
        </h1>
        <ul>
          <li className="mb-3">
            •How often do you feel overwhelmed by your
            responsibilities?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •Do you find it difficult to concentrate on your studies or tasks?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •How would you describe your mood over the past week?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •Do you feel that you have a strong support network of friends or
            family?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •How often do you experience feelings of anxiety or worry?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •Do you have trouble sleeping or experience changes in your sleep
            patterns?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input6}
              onChange={(e) => setInput6(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •Do you feel motivated to engage in activities you usually enjoy?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input7}
              onChange={(e) => setInput7(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •How often do you feel to open up to someone about your feelings?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input8}
              onChange={(e) => setInput8(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •Do you feel that you can effectively manage stress?{" "}
            <input
            type="number"
              placeholder="0"
              className="border-2 w-12 rounded-2xl text-black p-1"
              value={input9}
              onChange={(e) => setInput9(e.target.value)}
              min="0"
             max="10"
            ></input>
          </li>
          <li className="mb-3">
            •How satisfied are you with yourself{" "}
            <input
             type="number"
             placeholder="0"
             className="border-2 border-gray-300 w-12 rounded-xl text-black p-1 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             value={input10}
             onChange={(e) => setInput10(e.target.value)}
             min="0"
             max="10"
            ></input>
          </li>
        </ul>
    
      </div>
      <div className="mt-5 pb-10">
      <Link to='mentalResult' onClick={onSubmit} className="border-2 p-3  rounded-2xl text-2xl font-semibold hover:bg-slate-400">SUBMIT</Link>
      </div>
    </div>
  );
}

export default MentalQuestion;
