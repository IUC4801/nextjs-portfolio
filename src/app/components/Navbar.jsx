// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-white font-semibold"
//         >
//           LOGO
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
// @ts-nocheck
import Link from "next/link"
import React from 'react'
import { useRouter } from "next/navigation"
import { GithubIcon, LinkedInIcon, ResearchgateIcon, TryhackmeIcon, } from "./Icons"
import { motion } from "framer-motion"


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between border border-[#33353F]'
        >
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/achievemets" title="Achievements" className="ml-4" />

            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.linkedin.com/in/ayushi-chaudhuri-79744b1a2/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/IUC4801" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.researchgate.net/profile/Ayushi-Chaudhuri" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <ResearchgateIcon />
                </motion.a>
                <motion.a href="https://tryhackme.com/p/IUC08" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3"
                >
                    <TryhackmeIcon />
                </motion.a>
            </nav>

            {/* <div className="absolute left-[50%] top-2 translate-x-[-50]">
                <Logo />
            </div> */}
        </header>
    )
}

export default NavBar
