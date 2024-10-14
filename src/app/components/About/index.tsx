// import React from 'react';
// const PercentageBar = ({ label, percentage }) => (
//   <div className="mb-4">
//     <div className="flex justify-between mb-1">
//       <span className="text-sm font-medium text-gray-700">{label}</span>
//       <span className="text-sm font-medium text-gray-700">{percentage}%</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2.5">
//       <div
//         className="h-2.5 rounded-full"
//         style={{
//           width: `${percentage}%`,
//           background: label === 'Customer Care Service'
//             ? 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
//             : label === 'Delivery'
//               ? 'linear-gradient(90deg, #FB923C 0%, #FBBF24 100%)'
//               : 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
//         }}
//       ></div>
//     </div>
//   </div>
// );
// const WhoWeAre = () => {
//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//           <h2 className="text-blue-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">Marsabit's Best<br />Pharmaceutical Company</h3>
//           <p className="text-gray-600 mb-6">
//             We are number one Marsabits leading pharmaceutical players. Our strengths lie in quality products with very competitive pricing, excellent customer care services, and timely delivery.
//           </p>
//           <PercentageBar label="Customer Care Service" percentage={99} />
//           <PercentageBar label="Delivery" percentage={98} />
//           <PercentageBar label="Pricing" percentage={98} />
//         </div>
//         <div className="md:w-1/2">
//           <div className="ml-20">
//             <img
//               src="images/halima.jpg"
//               alt="Pharmaceutical company illustration"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default WhoWeAre;


// import Image from 'next/image';
// import React from 'react';

// // Define the props interface for PercentageBar
// interface PercentageBarProps {
//   label: string;
//   percentage: number;
// }

// const PercentageBar: React.FC<PercentageBarProps> = ({ label, percentage }) => (
//   <div className="mb-4">
//     <div className="flex justify-between mb-1">
//       <span className="text-sm font-medium text-gray-700">{label}</span>
//       <span className="text-sm font-medium text-gray-700">{percentage}%</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2.5">
//       <div
//         className="h-2.5 rounded-full"
//         style={{
//           width: `${percentage}%`,
//           background: label === 'Customer Care Service'
//             ? 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
//             : label === 'Delivery'
//               ? 'linear-gradient(90deg, #FB923C 0%, #FBBF24 100%)'
//               : 'linear-gradient(90deg, #4ADE80 0%, #22D3EE 100%)'
//         }}
//       ></div>
//     </div>
//   </div>
// );

// const WhoWeAre = () => {
//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//           <h2 className="text-blue-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
//           <h3 className="text-3xl font-bold text-gray-800 mb-4">Marsabit's Best<br />Pharmaceutical Company</h3>
//           <p className="text-gray-600 mb-6">
//             We are number one Marsabits leading pharmaceutical players. Our strengths lie in quality products with very competitive pricing, excellent customer care services, and timely delivery.
//           </p>
//           <PercentageBar label="Customer Care Service" percentage={99} />
//           <PercentageBar label="Delivery" percentage={98} />
//           <PercentageBar label="Pricing" percentage={98} />
//         </div>
//         <div className="md:w-1/2">
//           <div className="ml-20">
//             <Image
//               src="images/halima.jpg"
//               alt="Pharmaceutical company illustration"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;


import Image from 'next/image';
import React from 'react';

// Define the props interface for PercentageBar
interface PercentageBarProps {
  label: string;
  percentage: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({ label, percentage }) => (
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
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Marsabit&apos;s Best
            <br />
            Pharmaceutical Company
          </h3>
          <p className="text-gray-600 mb-6">
            We are number one Marsabit&apos;s leading pharmaceutical players. Our strengths lie in quality products with very competitive pricing, excellent customer care services, and timely delivery.
          </p>
          <PercentageBar label="Customer Care Service" percentage={99} />
          <PercentageBar label="Delivery" percentage={98} />
          <PercentageBar label="Pricing" percentage={98} />
        </div>
        <div className="md:w-1/2">
        <div className="ml-20">
            <Image
              src="/images/halima.jpg"
              alt="Pharmaceutical company illustration"
              width={500} // Specify appropriate width
              height={400} // Specify appropriate height
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

