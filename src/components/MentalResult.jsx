import React from 'react'
import { Link } from 'react-router-dom'

function MentalResult() {
  return (
    <div id='body' className='flex flex-col  justify-center items-center mt-5 overflow-x-hidden '>
        <div id='greyBg' className='w-[80vw] bg-slate-300 rounded-3xl flex flex-col'>
            <div id='text' className='p-6 sm:p-16 text-3xl font-semibold'>
                <h1 className='font-bold'>Your Choices shows</h1>
                <div id="tips" className='mt-5 text-2xl'>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    <h6 className='mb-3'>-point</h6>
                    
                </div>
            </div>
            <div id="back" className='flex justify-center mt-10 pb-5'>
                  <Link to=".."><button className='border-2 text-3xl font-semibold bg-slate-400 border-slate-500 p-3 px-8 rounded-[40px]'>
                        <h6 >Home</h6>
                    </button></Link>
                </div>
        </div>
        
    </div>
  )
}

export default MentalResult