// import React from 'react';
// import Head from 'next/head';

// const HomePage = () => {
//   return (
//     <>
//       <Head>
//         <title>Nagelle Pharmaceutical Co. Ltd</title>
//         <meta name="description" content="Your Pharmaceuticals partner of choice" />
//       </Head>

//       {/* Top Header Bar with contact info */}
//       <div style={{ backgroundColor: '#e1f2f9', padding: '10px 0', textAlign: 'center' }}>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//           <span>+254 759 444 066</span>
//           <span>info@nagellepharma.co.ke</span>
//           <span>Biashara Street, Moyale</span>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'center' }}>
//         {/* Logo */}
//         <div>
//           <img className='ml-24' src="/images/logo2.png" alt="Nagelle Pharma Logo" style={{ height: '100px' }} />
//         </div>

//         {/* Navigation Links */}
//         <nav>
//           <ul style={{ display: 'flex', listStyle: 'none', gap: '30px' }}>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">What We Do</a></li>
//             <li><a href="#">Who We Are</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Team</a></li>
//             <li><a href="#">Contact Us</a></li>

//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default HomePage;


import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Nagelle Pharmaceutical Co. Ltd</title>
        <meta name="description" content="Your Pharmaceuticals partner of choice" />
      </Head>

      {/* Top Header Bar with contact info */}
      <div className="bg-[#e1f2f9] py-2 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-5 text-blue-500 ">
          <span>+254 759 444 066</span>
          <span>info@nagellepharma.co.ke</span>
          <span>Biashara Street, Moyale</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex flex-col md:flex-row justify-between items-center p-5">
        {/* Logo */}
        <div>
          <Image
            className="ml-0 md:ml-24 h-16 sm:h-20 md:h-24 lg:h-[120px]" 
            src="/images/logo3.png" 
            alt="Nagelle Pharma Logo"
            width={250} // Specify appropriate width
            height={200} // Specify appropriate height
          />
        </div>
   

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row list-none gap-4 md:gap-8 text-blue-500 mr-28">
            <li><a href="#">Home</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HomePage;