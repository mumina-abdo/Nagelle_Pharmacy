// import React from 'react';
// import { User2, FileText, Truck } from 'lucide-react';
// const Card = ({ icon, title, description }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <div className="mb-4 text-gray-600">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );
// const WhatWeDo = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-blue-500 text-lg font-semibold text-center mb-2">WHAT WE DO</h2>
//         <h3 className="text-2xl font-bold text-center mb-8">Nagelle Pharmaceutical leads in pharmaceutical Sppplies:</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Card
//             icon={<User2 size={40} />}
//             title="Customer Care"
//             description="We have an amazing professional team that is dedicated and works extra hard to provide exceptional customer care service. We are dedicated to always improving and evolving our services to match the current, ever-evolving industry."
//           />
//           <Card
//             icon={<FileText size={40} />}
//             title="Pricing"
//             description="We offer very competitive pricing on our products. Not only are our prices low, but we also provide quality products sourced from reputable suppliers and partners. Our dedication ensures that all our customers have access to quality products at friendly prices."
//           />
//           <Card
//             icon={<Truck size={40} />}
//             title="Delivery"
//             description="Our delivery team, with their prompt service, ensures that all our partners receive their orders and requests on time and in perfect condition. We make sure all our customers' needs are served to perfection."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default WhatWeDo;


// import React from 'react';
// import { User2, FileText, Truck } from 'lucide-react';

// const Card = ({ icon, title, description }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:bg-blue-500 hover:shadow-xl">
//     <div className="mb-4 text-gray-600 hover:text-white">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold mb-2 hover:text-white">{title}</h3>
//     <p className="text-gray-600 hover:text-white">{description}</p>
//   </div>
// );

// const WhatWeDo = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-blue-500 text-lg font-semibold text-center mb-2">WHAT WE DO</h2>
//         <h3 className="text-2xl font-bold text-center mb-8">Nagelle Pharmaceutical leads in pharmaceutical Supplies:</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Card
//             icon={<User2 size={40} />}
//             title="Customer Care"
//             description="We have an amazing professional team that is dedicated and works extra hard to provide exceptional customer care service. We are dedicated to always improving and evolving our services to match the current, ever-evolving industry."
//           />
//           <Card
//             icon={<FileText size={40} />}
//             title="Pricing"
//             description="We offer very competitive pricing on our products. Not only are our prices low, but we also provide quality products sourced from reputable suppliers and partners. Our dedication ensures that all our customers have access to quality products at friendly prices."
//           />
//           <Card
//             icon={<Truck size={40} />}
//             title="Delivery"
//             description="Our delivery team, with their prompt service, ensures that all our partners receive their orders and requests on time and in perfect condition. We make sure all our customers' needs are served to perfection."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;


import React from 'react';
import { User2, FileText, Truck } from 'lucide-react';

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:text-white">
    <div className="mb-4 text-gray-600 transition-colors duration-300 hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-white">{title}</h3>
    <p className="text-gray-600 transition-colors duration-300 hover:text-white">{description}</p>
  </div>
);

const WhatWeDo = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-500 text-lg font-semibold text-center mb-2">WHAT WE DO</h2>
        <h3 className="text-2xl font-bold text-center mb-8">Nagelle Pharmaceutical leads in pharmaceutical Supplies:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<User2 size={40} />}
            title="Customer Care"
            description="We have an amazing professional team that is dedicated and works extra hard to provide exceptional customer care service. We are dedicated to always improving and evolving our services to match the current, ever-evolving industry."
          />
          <Card
            icon={<FileText size={40} />}
            title="Pricing"
            description="We offer very competitive pricing on our products. Not only are our prices low, but we also provide quality products sourced from reputable suppliers and partners. Our dedication ensures that all our customers have access to quality products at friendly prices."
          />
          <Card
            icon={<Truck size={40} />}
            title="Delivery"
            description="Our delivery team, with their prompt service, ensures that all our partners receive their orders and requests on time and in perfect condition. We make sure all our customers' needs are served to perfection."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
