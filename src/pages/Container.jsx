import React from "react";

export default function Container() {
  return (
    <div className="relative flex flex-col w-full h-screen mt-8 items-center justify-center p-0 md:p-2">
        {/* compound */}
      <div className="relative container flex flex-col h-5/6 w-4/5 mx-auto justify-center items-center text-center">
       
        {/* pillar */}
        <span className="bg-gradient-to-br from-neutral-500 to-orange-800 h-full w-10 absolute rounded-t-lg left-4"></span>

        {/* ground floor */}
        <div className="w-5/6 h-52 bg-slate-500 absolute bottom-0 left-5 z-10">

            {/* window left */}
            <div className="absolute rounded-lg shadow-xl top-16 left-8 h-24 w-20 bg-slate-900 flex flex-col items-center justify-center">
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>

            {/* enterance */}
            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-72 absolute left-60 border-x-8 border-slate-900 rounded-t-lg">
                {/* small tv */}
                <span className="absolute rounded-sm shadow-xl top-8 left-8 h-10 w-14 bg-slate-900"></span>

                {/* door */}
                <div className="absolute cursor-pointer rounded-tl-lg shadow-xl bottom-0 right-0 h-40 w-24 bg-orange-900">
                    
                    {/* knob */}
                    <span className="absolute rounded-sm shadow-xl top-4 left-4 h-1 w-3 bg-slate-900"></span>
                    <span className="absolute rounded-sm shadow-xl top-20 left-4 h-4 w-1 bg-slate-900"></span>

                </div>
            </div>

            
            {/* windows right */}
            <div className="absolute rounded-lg shadow-xl top-16 right-8 h-24 w-20 bg-slate-900 flex flex-col items-center justify-center">
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>
            <div className="absolute rounded-lg shadow-xl top-16 right-40 h-24 w-20 bg-slate-900 flex flex-col items-center justify-center">
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>

        </div>

        {/* first ceiling */}
        <div className="w-4/5 h-20 bg-slate-900 absolute bottom-52 left-14"></div>
        
        {/* traingle */}
        <span className="absolute bottom-52 left-6 rotate-45 p-50 bg-slate-900">
            <span className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[100px] border-l-slate-900 z-10 border-b-[140px] border-b-transparent"></span>
        </span>

        {/* center triangle */}
        <span className="absolute bottom-64 left-80 p-50 bg-orange-900">
            <span className="w-0 h-0 border-l-[150px] border-l-transparent border-b-[60px] border-b-orange-900 z-10 border-r-[150px] border-r-transparent"></span>
        </span>

        {/* floor */}
        <div className="w-4/5 h-36 bg-slate-500 absolute bottom-64 left-14 z-10">
            
            {/* enterance */}
            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute left-6 border-x-8 border-slate-900 rounded-t-lg">
                <div className="absolute rounded-sm shadow-xl top-2 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
                <div className="absolute rounded-sm shadow-xl top-2 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute left-80 z-50 border-x-8 border-slate-900 rounded-t-lg">
                <div className="absolute rounded-sm shadow-xl top-8 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
                <div className="absolute rounded-sm shadow-xl top-2 right-16 h-6 w-14 bg-slate-900 flex flex-col items-center justify-center">
                </div>
                <div className="absolute rounded-sm shadow-xl bottom-2 left-16 h-6 w-14 bg-slate-900 flex flex-col items-center justify-center">
                </div>
                <div className="absolute rounded-sm shadow-xl top-8 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute right-6 border-x-8 border-slate-900 rounded-t-lg">
                <div className="absolute rounded-sm shadow-xl top-2 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
                <div className="absolute rounded-sm shadow-xl top-2 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center">
                </div>
            </div>

        </div>
        
        {/* top ceiling */}
        <div className=" mx-auto h-28 bg-gradient-to-br absolute top-2 left-14 w-4/5 z-30 p-50 from-slate-600 to-orange-800 rounded-t-full"></div>
      
      </div>
      {/* compound end */}

    </div>
  );
}
