import React from "react";

export default function Design() {
  return (
    <div className="relative flex flex-col w-full h-screen mt-8 items-center justify-center p-0 md:p-2">
      <div className="relative container flex h-5/6 w-4/5 mx-auto justify-center items-end">
        {/* pillar */}
        <div className="bg-gradient-to-br from-neutral-500 to-orange-800 h-full w-10 rounded-t-lg "></div>
        <div className="flex flex-col w-auto">
          {/* floor */}
          <div className="w-4/5 h-36 bg-slate-500 absolute bottom-64 left-14 z-10">
            {/* enterance */}
            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute left-6 border-x-8 border-slate-900 rounded-t-lg">
              <div className="absolute rounded-sm shadow-xl top-2 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
              <div className="absolute rounded-sm shadow-xl top-2 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
            </div>

            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute left-80 z-50 border-x-8 border-slate-900 rounded-t-lg">
              <div className="absolute rounded-sm shadow-xl top-8 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
              <div className="absolute rounded-sm shadow-xl top-2 right-16 h-6 w-14 bg-slate-900 flex flex-col items-center justify-center"></div>
              <div className="absolute rounded-sm shadow-xl bottom-2 left-16 h-6 w-14 bg-slate-900 flex flex-col items-center justify-center"></div>
              <div className="absolute rounded-sm shadow-xl top-8 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
            </div>

            <div className="bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 bottom-0 w-52 absolute right-6 border-x-8 border-slate-900 rounded-t-lg">
              <div className="absolute rounded-sm shadow-xl top-2 left-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
              <div className="absolute rounded-sm shadow-xl top-2 right-2 h-14 w-10 bg-slate-900 flex flex-col items-center justify-center"></div>
            </div>
          </div>

          {/* ceiling */}
          <div className="w-full h-16 bg-slate-900"></div>

          {/* ground floor */}
          <div className="w-full h-52 bg-slate-500 flex items-center justify-between">
            <div className=" mx-2 rounded-lg shadow-xl h-24 w-20 bg-slate-900 flex flex-col items-center justify-center">
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>

            {/* enterance */}
            <div className="relative mx-5 ml-10 bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5  w-72 border-x-8 border-slate-900 rounded-t-lg">
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
            <div className="relative rounded-lg shadow-xl h-24 mx-4 w-20 bg-slate-900 flex flex-col items-center justify-center">
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>
            <div className="relative rounded-lg shadow-xl  h-24 mx-4 w-20 bg-slate-900 flex flex-col items-center justify-center">
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
              <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
