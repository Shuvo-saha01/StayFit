import React from 'react'

function MedTimer() {
  return (
    <div id='body' className='flex justify-center items-center mt-5'>
         <div id='greyBg' className='w-[90vw] sm:w-[80vw] text-3xl font-semibold h-[90vh] sm:h-[80vh] bg-slate-300 rounded-3xl flex justify-center'>
            <div className='flex-col justify-center'>
            <h1 className='my-5 mt-10 font-bold text-4xl'>Meditation Timer</h1>
            <div className='flex flex-col justify-center items-center'>
              <button className='border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3'>10 Min</button>
              <button className='border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3'>20 Min</button>
              <button className='border-2 bg-slate-400 border-slate-500 p-5 px-16 rounded-[40px] mb-3'>30 Min</button>
            </div>
            </div>
         </div>
    </div>
  )
}

export default MedTimer