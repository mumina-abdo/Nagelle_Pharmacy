// import React from 'react';

// const WellnessBanner = () => {
//   return (
//     <main className="flex items-center justify-center bg-blue-500 py-20">
//       <div className="text-center">
//         <h1 className="text-white text-6xl font-bold">
//           I CHOOSE <span className="border-2 border-white px-2">wellness</span>
//         </h1>
//         <p className="text-white text-xl mt-4 tracking-wider">
//           GET QUALITY & AFFORDABLE MEDICINES TO SUPPORT YOUR WELL-BEING
//         </p>
//       </div>
//     </main>
//   );
// };

// export default WellnessBanner;



import React from 'react';

const WellnessBanner = () => {
  return (
    <main className="flex items-center justify-center bg-blue-500 py-10 sm:py-16 md:py-20">
      <div className="text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          I CHOOSE <span className="border-2 border-white px-2">wellness</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4 tracking-wider">
          GET QUALITY & AFFORDABLE MEDICINES TO SUPPORT YOUR WELL-BEING
        </p>
      </div>
    </main>
  );
};

export default WellnessBanner;