import React from 'react';

const WellnessBanner = () => {
  return (
    <main className="flex items-center justify-center bg-blue-500 py-20">
      <div className="text-center">
        <h1 className="text-white text-6xl font-bold">
          I CHOOSE <span className="border-2 border-white px-2">wellness</span>
        </h1>
        <p className="text-white text-xl mt-4 tracking-wider">
          GET QUALITY & AFFORDABLE MEDICINES TO SUPPORT YOUR WELL-BEING
        </p>
      </div>
    </main>
  );
};

export default WellnessBanner;
