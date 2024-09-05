import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MentalResult() {
    let x = "You missed the question!"
   let array1 = ["You deal with work with a calm mind, keep it up!","Ask mentors for help,to manage time more effectively ", "learn to manage time and distribute the work into smaller steps and ask for help when feeling lost", "You missed the question!"]
   let array2 = ["It is good to be able to concentrate on your studies and work", " Create a distraction free zone and try to focus on your work", "create a schedule, meditate, reduce distractions, get proper sleep and use techniques like pomodoro", "You missed the question!" ]
   let array3 = [" If you are feeling down, take a break and express your feelings to your closed ones", "Try to spend more time with your closed ones and talk with them, express your feelings", "Having a good mood can help boost your productivity and mental health", "You missed the question!"]
   let array4 = [" Try to make a strong network of friends, family, or mentors, it can make a big difference when you’re facing challenges", "Try to connect more with peaople around you", " Good, keep the relations clean and meaningful as always",x ]
   let array5 = ["It is great to be able to resolve your issues camly", "mindfulness exercises, talking to someone you trust, or even just taking a break to relax can help", "Anxiety destroys mental health, try to meditate, take a break and open up to your closed ones",x]
   let array6 = ["Keep up the same sleep schedule","Try to maintain a sleep schedule and follow it through","Take a break, address a professional on the issue and follow a sleep schedule",x]
   let array7 = ["Try to take a break from the activity, relax and engage in other activities that you enjoy", "Find new enjoyable activities and engage in those with friends and family","Good to engage in joyful activities and try to find new activities to enjoy too", x]
   let array8 = ["Being able to manage yourself is good but opening up to friends and family can help", "Talk with your friends and family, ask them for help on your issue", " Talk with your friends, family and mentors about your feelings and concerns",x]
   let array9 = ["Don’t rely on drugs and try to resolve it through guidance of your mentors, friends and family", " If you can’t handle stress and challenges, try to ask your friends, family or mentors for guidance", "Being able to manage stress and cope with challenges is an important skill to have", x]
   let array10 = [" Create a weekly schedule, make friends, ask mentors for guidance and complete your set goal","Make a proper schedule, talk with everyone and complete your set goal"," Try to maintain that same balance between school, social life and personal time",x]
   
   let input1 = useSelector((s) => s.mental.input1)
   let input2 = useSelector((s) => s.mental.input2)
   let input3 = useSelector((s) => s.mental.input3)
   let input4 = useSelector((s) => s.mental.input4)
   let input5 = useSelector((s) => s.mental.input5)
   let input6 = useSelector((s) => s.mental.input6)
   let input7 = useSelector((s) => s.mental.input7)
   let input8 = useSelector((s) => s.mental.input8)
   let input9 = useSelector((s) => s.mental.input9)
   let input10 = useSelector((s) => s.mental.input10)


   
   return (
    
    <div id='body' className='flex flex-col  justify-center items-center mt-5 overflow-x-hidden '>
        <div id='greyBg' className='w-[80vw] bg-slate-300 rounded-3xl flex flex-col'>
            <div id='text' className='p-6 sm:p-16 text-3xl font-semibold'>
                <h1 className='font-bold'>We Suggest</h1>
                <div id="tips" className='mt-5 text-2xl'>
                    <h6 className='mb-3'>-{array1[input1]}</h6>
                    <h6 className='mb-3'>-{array2[input2]}</h6>
                    <h6 className='mb-3'>-{array3[input3]}</h6>
                    <h6 className='mb-3'>-{array4[input4]}</h6>
                    <h6 className='mb-3'>-{array5[input5]}</h6>
                    <h6 className='mb-3'>-{array6[input6]}</h6>
                    <h6 className='mb-3'>-{array7[input7]}</h6>
                    <h6 className='mb-3'>-{array8[input8]}</h6>
                    <h6 className='mb-3'>-{array9[input9]}</h6>
                    <h6 className='mb-3'>-{array10[input10]}</h6>
                    
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