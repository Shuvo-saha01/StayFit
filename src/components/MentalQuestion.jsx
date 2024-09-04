import React from 'react'

function MentalQuestion() {
  return (
    <div id='body' className='flex justify-center'>
        <div className='text-3xl font-semibold'>
        <h1 className='text-center my-5 text-4xl font-bold'>Rate yourself on these questions</h1>
        <ul>
            <li className='mb-3'>•How often do you feel overwhelmed by your schoolwork or responsibilities? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•Do you find it difficult to concentrate on your studies or tasks? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•How would you describe your mood over the past week? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•Do you feel that you have a strong support network of friends or family? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•How often do you experience feelings of anxiety or worry? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•Do you have trouble sleeping or experience changes in your sleep patterns? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•Do you feel motivated to engage in activities you usually enjoy? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•How often do you feel to open up to someone about your feelings? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•Do you feel that you can effectively manage stress? <text className='border-2 p-2 rounded-3xl'  >0</text></li>
            <li className='mb-3'>•How satisfied are you with yourself <text className='border-2 p-2 rounded-3xl'  >0</text></li>
        </ul>
        </div>
    </div>
  )
}

export default MentalQuestion