import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function BmiReport() {
  const bmi = useSelector((state) =>state.info.value.bmi)
  const [output, setOutput] = useState("")
  const[remark, setRemark] = useState("")
  useEffect(() => {
    if (bmi <= 18.5) {
      setRemark("You are Underweight!");
      setOutput("It's important to monitor nutrition intake to maintain a balanced diet that supports overall health. Including protein-rich foods can help support muscle growth, especially when paired with light strength training exercises. Increasing calorie intake with healthy snacks can also aid in maintaining a healthy weight. Staying hydrated is essential, as it supports digestion and overall bodily functions, ensuring that the body receives the necessary nutrients to thrive.");
    } else if (bmi > 18.5 && bmi < 25) {
      setRemark("You are perfectly Healthy!");
      setOutput("For a normal BMI, maintaining a balanced and nutritious diet is essential to support overall health and well-being. Incorporate a variety of fruits, vegetables, whole grains, and lean proteins to ensure your body gets all the necessary nutrients. Regular physical activity, such as a mix of cardio and strength training, helps maintain a healthy weight and improves overall fitness. Staying hydrated is equally important, as it aids in digestion, energy levels, and skin health. Consistent sleep and stress management practices also play key roles in sustaining a healthy lifestyle with a normal BMI.");
    } else if (bmi >= 25 && bmi < 30) {
      setRemark("You are slightly Overweight!");
      setOutput("Focus on adopting healthier eating habits by prioritizing whole foods, such as fruits, vegetables, lean proteins, and whole grains. Incorporate regular physical activity, including both cardio and strength training, to help with weight management and improve fitness levels. Monitoring portion sizes and reducing high-calorie, low-nutrient foods can assist in creating a calorie deficit for weight loss. Staying hydrated supports metabolism and overall health. Additionally, seek guidance from a healthcare professional to develop a personalized plan that addresses both dietary and lifestyle changes.");
    } else if (bmi >= 30) {
      setRemark("You are in the Obese category!");
      setOutput("It's crucial to start by focusing on a well-balanced diet rich in whole foods like vegetables, fruits, lean proteins, and whole grains while minimizing processed and high-calorie foods. Regular physical activity, including both aerobic exercises and strength training, is essential for weight loss and improving overall fitness. Portion control and mindful eating can help manage calorie intake effectively. Staying well-hydrated supports metabolism and helps reduce hunger. Consulting with a healthcare provider or a nutritionist can provide personalized strategies and support for achieving and maintaining a healthier weight.");
    }
  }); 
  

  return (
    <div id='body' className='flex  justify-center items-center mt-5 overflow-x-hidden overflow-y-hidden'>
        <div id='greyBg' className='w-[80vw] h-[80vh] bg-slate-300 rounded-3xl'>
            <div id='text' className='p-6 sm:p-16 text-3xl font-semibold'>
                <h1 className='font-bold'>BMI {bmi}</h1>
                <h1 className='mt-3'>{remark}</h1>
                <div id="tips" className='mt-5'>
                    <h6 className='mb-3 text-2xl font-semibold'>Tips to maintain the BMI</h6>
                    <h6 className='text-2xl'>
                    {output}
                    </h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BmiReport