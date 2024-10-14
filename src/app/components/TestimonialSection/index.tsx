
// "use client"; // This ensures the component is rendered on the client side

// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// // Dummy data for testimonials
// const testimonials = [
//   {
//     quote: '"I can’t say enough about the quality of the medications here! Every time I pick up my prescriptions, I’m confident that I’m receiving top-notch products. It gives me peace of mind knowing that my health is in good hands!".',
//     author: 'Dr. Emoy Adama',
//   },
//   {
//     quote: 'The delivery service is outstanding! My prescriptions always arrive on time and in perfect condition. It’s such a relief to know I can count on them to deliver exactly what I need, right to my doorstep!',
//     author: 'Dr. Halkhe',
//   },
//   {
//     quote: 'I’ve been thrilled with the competitive pricing at this pharmacy! It’s refreshing to find a place that offers both quality medications and affordable prices. I always feel like I’m getting great value for my money!',
//     author: 'Dr. Adow',
//   },
// ];

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handler for previous arrow click
//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   // Handler for next arrow click
//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <section className="bg-blue-500 py-20 relative">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold text-brown-800 mb-6">
//           What Our Customers Say
//         </h2>

//         {/* Display the current testimonial */}
//         <p className="text-xl text-brown-700 mb-8">
//           {testimonials[currentIndex].quote}
//         </p>
//         <p className="font-bold text-brown-900">
//           {testimonials[currentIndex].author}
//         </p>

//         {/* Dots for slider control (active dot shows current slide) */}
//         <div className="flex justify-center items-center mt-6 space-x-2">
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full inline-block ${
//                 index === currentIndex ? 'bg-brown-500' : 'bg-white'
//               }`}
//             ></span>
//           ))}
//         </div>

//         {/* Chevron for navigation */}
//         <div
//           className="absolute top-1/2 left-8 transform -translate-y-1/2 cursor-pointer"
//           onClick={handlePrevClick}
//         >
//           <FaChevronLeft className="text-brown-800" />
//         </div>
//         <div
//           className="absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer"
//           onClick={handleNextClick}
//         >
//           <FaChevronRight className="text-brown-800" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;



"use client"; // This ensures the component is rendered on the client side

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Dummy data for testimonials
const testimonials = [
  {
    quote: '"I can’t say enough about the quality of the medications here! Every time I pick up my prescriptions, I’m confident that I’m receiving top-notch products. It gives me peace of mind knowing that my health is in good hands!".',
    author: 'Dr. Emoy Adama',
  },
  {
    quote: 'The delivery service is outstanding! My prescriptions always arrive on time and in perfect condition. It’s such a relief to know I can count on them to deliver exactly what I need, right to my doorstep!',
    author: 'Dr. Halkhe',
  },
  {
    quote: 'I’ve been thrilled with the competitive pricing at this pharmacy! It’s refreshing to find a place that offers both quality medications and affordable prices. I always feel like I’m getting great value for my money!',
    author: 'Dr. Adow',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for previous arrow click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Handler for next arrow click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-blue-500 py-20 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-brown-800 mb-6 text-white ">
          What Our Customers Say
        </h2>

        {/* Display the current testimonial */}
        <p className="text-xl text-brown-700 mb-8">{testimonials[currentIndex].quote}</p>
        <p className="font-bold text-brown-900">{testimonials[currentIndex].author}</p>

        {/* Dots for slider control (active dot shows current slide) */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full inline-block ${
                index === currentIndex ? 'bg-brown-500' : 'bg-white'
              }`}
            ></span>
          ))}
        </div>

        {/* Chevron for navigation */}
        <div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 cursor-pointer md:left-4 lg:left-8"
          onClick={handlePrevClick}
        >
          <FaChevronLeft className="text-brown-800" />
        </div>
        <div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer md:right-4 lg:right-8"
          onClick={handleNextClick}
        >
          <FaChevronRight className="text-brown-800" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

