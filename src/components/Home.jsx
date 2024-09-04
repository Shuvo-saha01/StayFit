import React from "react";

function Home() {
  return (
    <div className="flex max-w-full justify-center overflow-x-hidden">
        <div className="flex justify-center max-w-80 sm:max-w-full">
      <div className="flex justify-center flex-col items-center mt-5  sm:max-w-full">
        {/* quote */}
        <div id="Quote" className="hidden sm:block border-2 text-4xl font-semibold px-20 py-4 my-3 bg-[#FB2323] text-white tracking-wide rounded-[40px]">
            <h1 className="">“Push yourself because no one<br/>else is going to do it for you”</h1>
        </div>

        <div id="FirstRow" className="sm:flex ">
        <div id="BMI" className="border-2 p-8 mb-3 sm:my-0 py-12 bg-[#19DF19] rounded-[40px] px-12 sm:mx-5 text-white font-semibold">
            <h1 className="text-3xl sm:text-2xl mb-3">BMI 24</h1>
            <h5 className="text-2xl ">"You are as <br/>fine as you can get"</h5>
            <div className="flex justify-end ">
                <h6 className="text-xl" >&gt;</h6>
            </div>
        </div>

        <div id="Water" className="border-2 p-8 py-12 bg-[#0D6BF9] rounded-[40px] px-12 sm:mx-5 text-white font-semibold">
            <h1 className="text-3xl mb-3">Drink more 2.4L</h1>
            <h5 className="text-2xl ">“water is your body's<br/>best fuel”</h5>
            
        </div>
        </div>

        <div id="SecondRow" className="mt-5 sm:flex sm:justify-between mb-5">
            <div id="medTimer" className="sm:w-80 border-2 w-80  rounded-[56px] mb-3 sm:my-3 p-6 text-3xl sm:mx-6 font-semibold bg-[#FB2323] text-white">
                <h1>Set Meditation Timer</h1>
                <div className="flex justify-end ">
                    <h6 className="text-xl" >&gt;</h6>
                </div>
            </div>
            <div id="mentalHealth" className="sm:w-80 border-2 w-80 rounded-[56px] mb-3 sm:my-3 p-6 text-3xl  sm:mx-6 font-semibold bg-[#FB2323] text-white">
                <h1>Mental Health</h1>
                <div className="flex justify-end ">
                    <h6 className="text-xl" >&gt;</h6>
                </div>
            </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Home;
