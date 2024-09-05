import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function BmiReport() {
  const sex = useSelector((state) =>state.info.value.sex)
  const age = useSelector((state) =>state.info.value.age)
  const weight = useSelector((state) =>state.info.value.weight)
  const height = useSelector((state) =>state.info.value.height)
  const bmi = useSelector((state) =>state.info.value.bmi)




  return (
    <div id='body' className='flex  justify-center items-center mt-5 overflow-x-hidden overflow-y-hidden'>
        <div id='greyBg' className='w-[80vw] h-[80vh] bg-slate-300 rounded-3xl'>
            <div id='text' className='p-6 sm:p-16 text-3xl font-semibold'>
                <h1 className='font-bold'>BMI {bmi}</h1>
                <div id="tips" className='mt-5'>
                    <h6 className='mb-3'>Tips to maintain the BMI</h6>
                    <h6>
                    &gt;Balanced Diet<br/>
                    &gt;Cardiovascular Exercise<br/>
                    &gt;Hydration<br/>
                    &gt;Monitor Your Weight<br/>
                    &gt;Balance Work and Leisure<br/>
                    </h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BmiReport