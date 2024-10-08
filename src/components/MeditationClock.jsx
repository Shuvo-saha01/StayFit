import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function MeditationClock() {
    const navigate = useNavigate();
    let initialTime = useSelector((state) => state.info.value.time)
    const [time, setTime] = useState(initialTime);
    const[min, setMin] = useState(0)
    const[sec, setSec] = useState(0)


    

    useEffect(() => {
      const alarmSound = new Audio("../sound/alarm.MP3")
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {

            clearInterval(interval);
            alarmSound.play().catch((err) => console.error("sound cant be played: ",err))
            if (navigator.vibrate) {
              navigator.vibrate(1000);
            }
            return 0;
          }
        });
      }, 1000);
  
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setMin(Math.floor(time / 60));
      setSec(time % 60);
    }, [time]);
  
    
    return (
        <div id='body' className='flex justify-center items-center mt-5 overflow-x-hidden overflow-y-hidden'>
             <div id='greyBg' className='w-[90vw] sm:w-[80vw] text-3xl font-semibold h-[90vh] sm:h-[80vh] bg-slate-300 rounded-3xl flex justify-center'>
                <div className='flex-col justify-center items-center'>
                <h1 className='my-5 mt-10 font-bold text-4xl text-center'>Meditation Timer</h1>
                <div id='clock' className='flex flex-col justify-center items-center'>
                  <h1 className='border-2 bg-slate-400 tracking-[18px] px-4 sm:px-16 rounded-[40px] border-slate-500 p-3 text-7xl' >{min}:{sec}</h1>
                </div>
                <div id="back" className='flex justify-center mt-10'>
                  <button onClick={() => navigate(-1)} className='border-2  bg-slate-400 border-slate-500 p-3 px-8 rounded-[40px]'>
                        Back
                    </button>
                </div>
                </div>
             </div>
        </div>
      )
}

export default MeditationClock