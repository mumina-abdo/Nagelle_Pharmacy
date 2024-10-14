// "use client";
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
// const products = [
//   {
//     id: 1,
//     name: "Cow & Gate NutriStart 2 Formula Milk 400g",
//     category: "Nutrition",
//     price: 1470,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 2,
//     name: "La Roche-Posay Anthelios Fluid UVMune 400 Spf50",
//     category: "La Roche-Posay Anthelios",
//     price: 2980,
//     image: "/images/pregcare.jpg/",
//     discount: 6
//   },
//   {
//     id: 3,
//     name: "La Roche-Posay Effaclar Duo(+) M 40ml",
//     category: "Face Care",
//     price: 2455,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 4,
//     name: "Mamalait Granules 250g",
//     category: "This Month's Offers",
//     price: 2376,
//     image: "/images/pregcare.jpg/",
//     discount: 20
//   },
//   {
//     id: 5,
//     name: "Pregnacare Plus 28 Capsules +28 tablets",
//     category: "Supplement Offers",
//     price: 2530,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   }
// ];
// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
//     <div className="relative">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//       {product.discount && (
//         <div className="absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs">

//         </div>
//       )}
//     </div>
//     <div className="p-4">
//       <p className="text-sm text-gray-600 mb-1">{product.category}</p>
//       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//       <div className="flex justify-between items-center">
//         <div>
//           <span className="text-xl font-bold">KES{product.price.toLocaleString()}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through ml-2">
//               KES{product.originalPrice.toLocaleString()}
//             </span>
//           )}
//         </div>
//         <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">

//         </button>
//       </div>
//     </div>
//   </div>
// );
// const Showcase: React.FC = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const nextProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };
//   const prevProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   };
//   const visibleProducts = [
//     products[(startIndex - 1 + products.length) % products.length],
//     ...products.slice(startIndex, startIndex + 3),
//     products[(startIndex + 3) % products.length],
//   ];
//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Most Popular Products</h2>
//         <div className="relative">
//           <div className="flex justify-between items-center space-x-4">
//             {visibleProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//           <button
//             onClick={prevProducts}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextProducts}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Showcase;





// "use client";
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// const products = [
//   {
//     id: 1,
//     name: "Cow & Gate NutriStart 2 Formula Milk 400g",
//     category: "Nutrition",
//     price: 1470,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 2,
//     name: "La Roche-Posay Anthelios Fluid UVMune 400 Spf50",
//     category: "La Roche-Posay Anthelios",
//     price: 2980,
//     image: "/images/pregcare.jpg/",
//     discount: 6
//   },
//   {
//     id: 3,
//     name: "La Roche-Posay Effaclar Duo(+) M 40ml",
//     category: "Face Care",
//     price: 2455,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 4,
//     name: "Mamalait Granules 250g",
//     category: "This Month's Offers",
//     price: 2376,
//     image: "/images/pregcare.jpg/",
//     discount: 20
//   },
//   {
//     id: 5,
//     name: "Pregnacare Plus 28 Capsules +28 tablets",
//     category: "Supplement Offers",
//     price: 2530,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   }
// ];

// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-blue-50 flex flex-col">
//     <div className="relative">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//       {product.discount && (
//         <div className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-full text-xs">
//           {product.discount}% OFF
//         </div>
//       )}
//     </div>
//     <div className="p-4 flex-grow">
//       <p className="text-sm text-gray-600 mb-1">{product.category}</p>
//       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//       <div className="flex justify-between items-center">
//         <div>
//           <span className="text-xl font-bold">KES {product.price.toLocaleString()}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through ml-2">
//               KES {product.originalPrice.toLocaleString()}
//             </span>
//           )}
//         </div>
//         <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
//           <ShoppingCart size={20} />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const Showcase = () => {
//   const [startIndex, setStartIndex] = useState(0);
  
//   const nextProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };
  
//   const prevProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   };

//   const visibleProducts = [
//     products[(startIndex - 1 + products.length) % products.length],
//     ...products.slice(startIndex, startIndex + 3),
//     products[(startIndex + 3) % products.length],
//   ];

//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Most Popular Products</h2>
//         <div className="relative">
//           <div className="flex justify-between items-center space-x-4 flex-wrap">
//             {visibleProducts.map((product) => (
//               <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={prevProducts}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextProducts}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Showcase;


// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// const products = [
//   {
//     id: 1,
//     name: "Cow & Gate NutriStart 2 Formula Milk 400g",
//     category: "Nutrition",
//     price: 1470,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 2,
//     name: "La Roche-Posay Anthelios Fluid UVMune 400 Spf50",
//     category: "La Roche-Posay Anthelios",
//     price: 2980,
//     image: "/images/pregcare.jpg/",
//     discount: 6
//   },
//   {
//     id: 3,
//     name: "La Roche-Posay Effaclar Duo(+) M 40ml",
//     category: "Face Care",
//     price: 2455,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   },
//   {
//     id: 4,
//     name: "Mamalait Granules 250g",
//     category: "This Month's Offers",
//     price: 2376,
//     image: "/images/pregcare.jpg/",
//     discount: 20
//   },
//   {
//     id: 5,
//     name: "Pregnacare Plus 28 Capsules +28 tablets",
//     category: "Supplement Offers",
//     price: 2530,
//     image: "/images/pregcare.jpg/",
//     discount: null
//   }
// ];

// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
//     <div className="relative">
//       <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//       {product.discount && (
//         <div className="absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs bg-red-500">
//           {product.discount}% OFF
//         </div>
//       )}
//     </div>
//     <div className="p-4">
//       <p className="text-sm text-gray-600 mb-1">{product.category}</p>
//       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//       <div className="flex justify-between items-center">
//         <div>
//           <span className="text-xl font-bold">KES {product.price.toLocaleString()}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through ml-2">
//               KES {product.originalPrice.toLocaleString()}
//             </span>
//           )}
//         </div>
//         <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
//           <ShoppingCart size={20} />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const Showcase = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const nextProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };

//   const prevProducts = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   };

//   const visibleProducts = [
//     products[(startIndex - 1 + products.length) % products.length],
//     ...products.slice(startIndex, startIndex + 3),
//     products[(startIndex + 3) % products.length],
//   ];

//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Most Popular Products</h2>
//         <div className="relative">
//           <div className="flex space-x-4 overflow-x-auto">
//             {visibleProducts.map((product) => (
//               <div className="min-w-[250px] flex-shrink-0" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={prevProducts}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextProducts}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Showcase;






"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// Define the product type
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  discount: number | null;
  originalPrice?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cow & Gate NutriStart 2 Formula Milk 400g",
    category: "Nutrition",
    price: 1470,
    image: "/images/pregcare.jpg",
    discount: null
  },
  {
    id: 2,
    name: "La Roche-Posay Anthelios Fluid UVMune 400 Spf50",
    category: "La Roche-Posay Anthelios",
    price: 2980,
    image: "/images/pregcare.jpg",
    discount: 6
  },
  {
    id: 3,
    name: "La Roche-Posay Effaclar Duo(+) M 40ml",
    category: "Face Care",
    price: 2455,
    image: "/images/pregcare.jpg",
    discount: null
  },
  {
    id: 4,
    name: "Mamalait Granules 250g",
    category: "This Month's Offers",
    price: 2376,
    image: "/images/pregcare.jpg",
    discount: 20
  },
  {
    id: 5,
    name: "Pregnacare Plus 28 Capsules +28 tablets",
    category: "Supplement Offers",
    price: 2530,
    image: "/images/pregcare.jpg",
    discount: null
  }
];

// Add typing for the product prop
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
    <div className="relative">
      <Image src={product.image} 
      alt={product.name} 
      className="w-full h-48 object-cover"
      width={500} // Specify appropriate width
      height={400} // Specify appropriate height
       />
      {product.discount && (
        <div className="absolute top-2 right-2 text-white px-2 py-1 rounded-full text-xs bg-red-500">
          {product.discount}% OFF
        </div>
      )}
    </div>
    <div className="p-4">
      <p className="text-sm text-gray-600 mb-1">{product.category}</p>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xl font-bold">KES {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              KES {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const visibleProducts = [
    products[(startIndex - 1 + products.length) % products.length],
    ...products.slice(startIndex, startIndex + 3),
    products[(startIndex + 3) % products.length],
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Most Popular Products</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto">
            {visibleProducts.map((product) => (
              <div className="min-w-[250px] flex-shrink-0" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={prevProducts}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProducts}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
