// "use client";

// import Link from "next/link";

// export default function MarqueeHeading({
//   items,
//   direction = "left",
//   speed = "slow",
//   className = "",
// }) {
//   const repeatedItems = [...items, ...items, ...items];

//   const speedMap = {
//     slow: 500,
//     normal: 30,
//     fast: 15,
//   };

//   const duration = speedMap[speed];
//   const isRight = direction === "right";

//   return (
//     <div className={`relative w-full overflow-hidden  nav-header ${className}`}>
//       <div className="marquee-track">
//         <div
//           className="marquee-inner"
//           style={{
//             animation: `${
//               isRight ? "marqueeRight" : "marqueeLeft"
//             } ${duration}s linear infinite`,
//           }}
//         >
//           {repeatedItems.map((item, index) => (
//             <Link
//               key={`${item.id}-${index}`}
//               href={item.slug}
//               className="  inline-block px-8 text-lg font-bold text-white hover:text-primary transition-colors duration-300 dark:text-gray-200    text-nowrap dark:hover:text-primary-foreground"
//               prefetch={false}
//             >
//               <p className="flex gap-20 items-center">
//                 {item.title} <span className="text-[30px] ">|</span>
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .marquee-track {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//         }

//         .marquee-inner {
//           display: flex;
//           width: fit-content;
//           min-width: 300%;
//         }

//         @keyframes marqueeLeft {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes marqueeRight {
//           0% {
//             transform: translateX(-33.333%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
