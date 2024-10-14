// import Image from "next/image";
// import React from "react";

// export default function Products() {
//   return (
//     <main   id='product' className="flex flex-col items-center max-w-7xl mt-20 mb-20 mx-auto px-4 py-8" style={{ fontFamily: 'Inter, serif' }}>
//       <h1 className="text-[#883418] text-4xl font-bold mt-24 mb-6">Product</h1>
//       <p className="text-center text-xl mb-12 max-w-3xl text-20">
//         <span className="text-[#883418] font-semibold">DishHub</span> is an innovative mobile app that enables you to easily organize <br />
//         your pantry items and transform them into tasty meals. Become part of the <br />
//         initiative to reduce food waste and ignite your culinary creativity.
//       </p>
//       <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl -mb-20 pt-12">
//         <div className="flex-1 flex justify-center mb-4 md:mb-0">
//           <Image
//             src="/images/one.png"
//             alt="DishHub Home"
//             height={500}
//             width={250}
//             className="object-contain rounded-lg"
//           />
//         </div>
//         <div className="flex-1 flex justify-center mb-4 md:mb-0">
//           <Image
//             src="/images/two.png"
//             alt="DishHub Recipes"
//             height={500}
//             width={250}
//             className="object-contain rounded-lg"
//           />
//         </div>
//         <div className="flex-1 flex justify-center mb-4 md:mb-0">
//           <Image
//             src="/images/three.png"
//             alt="DishHub Recipe Details"
//             height={500}
//             width={250}
//             className="object-contain rounded-lg"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }



// import React from 'react';
// import { Pill, Thermometer, Briefcase } from 'lucide-react';
// const ProductCard = ({ icon, title, description }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <div className="mb-4 text-gray-600">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600 text-sm">{description}</p>
//   </div>
// );
// const ProductCategories = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-blue-500 text-lg font-semibold text-center mb-2">Categories of</h2>
//         <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Products</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <ProductCard
//             icon={<Pill size={40} />}
//             title="Medicines"
//             description="Prescription and Over the Counter"
//           />
//           <ProductCard
//             icon={<Thermometer size={40} />}
//             title="Medical Devices"
//             description="Medical Machines and equipments eg. Thermometers, Glucometers etc"
//           />
//           <ProductCard
//             icon={<Briefcase size={40} />}
//             title="Medical Kits"
//             description="Testing kit, First aid kits etc"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ProductCategories;



import React from 'react';
import { Pill, Thermometer, Briefcase } from 'lucide-react';

const ProductCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:text-white">
    <div className="mb-4 text-gray-600 transition-colors duration-300 hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-white">{title}</h3>
    <p className="text-gray-600 text-sm transition-colors duration-300 hover:text-white">{description}</p>
  </div>
);

const ProductCategories = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-500 text-lg font-semibold text-center mb-2">Categories of</h2>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            icon={<Pill size={40} />}
            title="Medicines"
            description="Prescription and Over the Counter"
          />
          <ProductCard
            icon={<Thermometer size={40} />}
            title="Medical Devices"
            description="Medical Machines and equipment e.g. Thermometers, Glucometers, etc."
          />
          <ProductCard
            icon={<Briefcase size={40} />}
            title="Medical Kits"
            description="Testing kits, First aid kits, etc."
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
