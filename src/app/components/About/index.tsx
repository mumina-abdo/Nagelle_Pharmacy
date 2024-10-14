// import Image from 'next/image';

// export default function Aboutpage() {
//   return (
//     <main id='About' className='bg-orange-900 py-10 px-4 mx-auto text-center mt-[-14%]'>
//       <div className="gap-[-1%] flex flex-col md:flex-row lg:flex-row items-center max-w-7xl mx-auto -mt-16 mb-10" style={{ fontFamily: 'Inter, serif' }}>
//         <div className="flex-shrink-0 mt-40 -mb-12 md:mb-0 md:mr-3">
//           <Image
//             src="/images/food.png"
//             width={2500}
//             height={1000}
//             alt="Food"
//             className="ml-[7%] mt-10 w-full max-w-full md:max-w-2xl md:w-[400px] lg:max-w-3xl"
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
        
//         <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-28 -mb-10">
//           <h2 className='text-white mr-[65%] text-5xl md:text-3xl lg:text-4xl mb-4 font-bold'>
//             About Us
//             <br />
//           </h2>
//           <p className='text-white text-base md:text-lg text-[26px] lg:text-sm lg:w-[550px] mb-2 mt-10 text-start'>
//             Join Kuwala in the fight against food waste! Did you know that 1/3 of all food produced goes to waste? 
//             It impacts our wallets and our world. Lets empower each other to make a change - together, we can save food and 
//             create a brighter future. We believe that by working together, we can reduce food waste and make a positive impact.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

import React from 'react';
const PercentageBar = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="h-2.5 rounded-full"
        style={{
          width: `${percentage}%`,
          background: label === 'Customer Care Service'
            ? 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
            : label === 'Delivery'
              ? 'linear-gradient(90deg, #FB923C 0%, #FBBF24 100%)'
              : 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
        }}
      ></div>
    </div>
  </div>
);
const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-blue-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Marsabit's Best<br />Pharmaceutical Company</h3>
          <p className="text-gray-600 mb-6">
            We are number one Marsabits leading pharmaceutical players. Our strengths lie in quality products with very competitive pricing, excellent customer care services, and timely delivery.
          </p>
          <PercentageBar label="Customer Care Service" percentage={99} />
          <PercentageBar label="Delivery" percentage={98} />
          <PercentageBar label="Pricing" percentage={98} />
        </div>
        <div className="md:w-1/2">
          <div className="ml-20">
            <img
              src="images/halima.jpg"
              alt="Pharmaceutical company illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAre;