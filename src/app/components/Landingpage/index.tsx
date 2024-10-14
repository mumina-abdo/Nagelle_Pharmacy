
// import Image from 'next/image';

// export default function LandingPage() {
//   return (
//     <main id='Landingpage' className="container mx-auto px-4 sm:px-6 mb-40 mt-12 lg:px-8 py-12 lg:py-24 -" style={{ fontFamily: 'Inter, serif' }}>
//       <div className="flex flex-col lg:flex-row items-start justify-between 2xl:-ml-8 xs:ml-20 mb-40">
//         <div className="lg:w-1/2 mb-8 md:ml-4 lg:ml-12 lg:mt-[60px] xs:ml-20">
//           <h1 className="text-[20px] xs:text-3xl xl:text-7xl sm:text-4xl md:text-5xl lg:text-4xl font-bold lg:mb-[50px] gx:text-[25px] mt-[-10px] gs:text-[25px] ipad:text-[45px] ipad:ml-[10px] ipm:ml-[10px] pro:text-[45px] pro:mt-[20px] 
//           xs:ml-20">
//             Waste Not, Want Not!
//           </h1>

//           <p className="text-[20px] xs:text-[30px] xl:text-4xl xl:leading-loose sm:text-2xl md:text-4xl md:leading-normal lg:text-3xl lg:leading-loose mt-4 leading-tight sm:leading-loose gx:text-[20px] gs:text-[24px] ipad:text-[38px] ipm:ml-[10px] nx:whitespace-pre-line">
//             Cultivating creativity and<br></br>
//             <span className="hidden sm:block"> </span>
//             togetherness in food waste reduction.<br></br> 
//             <span className="hidden sm:block"> </span>
//           </p>

          
//           <div className="bg-orange-800 mt-[20px] rounded-lg inline-flex items-center px-4 py-2 sm:px-6 sm:py-3">
//             <Image 
//               src="/images/playstore.png" 
//               alt="Playstore Icon" 
//               width={32} 
//               height={32}
//               className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-8 lg:h-8 mr-2 sm:mr-3"
//             />
//             <div className="text-white">
//               <p className="text-xs sm:text-sm md:text-base lg:text-sm">Get it on</p>
//               <p className="text-base sm:text-lg md:text-xl lg:text-lg font-semibold gx:text-[12px] gs:text-[13px] ipad:text-[20px] fs:text-[15px]">Google Play</p>
//             </div>
//           </div>


//         </div>

//         <div className="lg:w-1/2 mt-4 sm:mt-2 md:mt-[40px] w-[20] xl:mr-[200px] xl:mt-[-80px] lg:mt-[-80px] ml-40 ">
//           <Image 
//             src="/images/household.png" 
//             alt="Household cook" 
//             width={500} 
//             height={500} 
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-lg mx-auto gx:w-[250px] md:ml-28 xl:mr-10" 
//           />
//         </div>
//       </div>
//     </main>
//   );
// }


// components/LandingPage.js
import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nagelle Pharmaceutical</h1>
          <p className="text-xl text-gray-600 mb-8">Your Pharmaceuticals partner of choice</p>
          
        </div>
        <div className="w-1/2 mb-10">
          <Image src="/images/newone.png" alt="Pharmaceutical Illustration" width={600} height={200} />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;