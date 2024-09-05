import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reduxTime } from "../app/infoSlice";

function MedTimer() {
  const [output, setOutput] = useState("")
  const [time, setTime] = useState(0)
  const dispatch = useDispatch()

  const stress = useSelector((state) => state.info.value.stressed)
  useEffect(() => {
    if(stress === "happy"){
      setOutput("As a calm person, 20 min can be a optimal choice. You can also choose 10 min if you are a beginner and work your way through")
    }else{
      setOutput("As a stressed person, 10 Min should be your start to the journey, try not to take too much pressure and work your way through when you feel comfortable")
    }
  },[stress])

  return (
    <div id="body" className="flex justify-center items-center mt-5">
      <div
        id="greyBg"
        className="w-[90vw] sm:w-[80vw] text-3xl font-semibold h-[90vh] sm:h-[80vh] bg-slate-300 rounded-3xl flex justify-center"
      >
        <div className="flex-col justify-center">
          <h1 className="my-5 mt-10 font-bold text-4xl text-center">Meditation Timer</h1>
          <div className="flex flex-col justify-center items-center">
            <Link to="timer">
              <button onClick={() => dispatch(reduxTime(600))} className="border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3">
                10 Min
              </button>
            </Link>
            <Link to="timer">
              <button  onClick={() => dispatch(reduxTime(1200))} className="border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3">
                20 Min
              </button>
            </Link>
            <Link to="timer">
              <button  onClick={() => dispatch(reduxTime(1800))} className="border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3">
                30 Min
              </button>
            </Link>
            <h6 className=" mt-5 text-lg text-slate-500 text-center px-5">{output}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedTimer;


