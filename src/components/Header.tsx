import logoNubank from "../assets/logo-nubank.png";
import { FiLogIn } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

export const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <header className="fixed top-0 right-0 left-0 w-screen h-[55px] flex items-center justify-between px-6 xl:justify-between xl:gap-8 xl:pl-12 xl:pr-16 border bg-white">
            <img className="w-[45px] h-[55px] mr-4 xl:mr-0" src={logoNubank} alt="Logo Nubank" />
            <nav className="justify-center items-center xl:mr-auto">
                <ul className={`absolute left-0 w-screen h-screen text-[30px] font-GraphikMedium text-gray-800 bg-white font-semibold flex flex-col justify-start items-start min-[375px]:text-4xl  md:text-6xl xl:static xl:flex xl:flex-row xl:justify-center xl:items-center xl:w-[650px] xl:h-10 xl:text-sm xl:gap-2 transition-all duration-500 ease-in ${showNavbar ? 'top-[54px]' : 'top-[-1200px]'}`}>
                    <li className="h-32 flex items-center border-b-2 border-gray-300 w-full xl:border-none xl:mt-0 cursor-pointer transition-all duration-300 ease-in xl:h-14 hover:bg-nubankpurple hover:text-white xl:hover:none"><a className="transition-all duration-300 ease-in ml-4" href="#">Página Inicial</a></li>
                    <li className="group h-32 flex items-center border-b-2 border-gray-300 w-full xl:border-none cursor-pointer transition-all duration-300 ease-in xl:h-14 hover:bg-nubankpurple hover:text-white xl:hover:none"><a className="transition-all duration-300 ease-in flex justify-start items-center gap-2 ml-4"  href="#">Para você<IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" /></a></li>
                    <li className="group h-32 flex items-center border-b-2 border-gray-300 w-full xl:border-none cursor-pointer transition-all duration-300 ease-in xl:h-14 hover:bg-nubankpurple hover:text-white xl:hover:none"><a className="transition-all duration-300 ease-in flex justify-start items-center gap-2 ml-4 xl:border-none xl:w-[150px]" href="#">Para seu negócio<IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" /></a></li>
                    <li className="group h-32 flex items-center border-b-2 border-gray-300 w-full xl:border-none cursor-pointer transition-all duration-300 ease-in xl:h-14 hover:bg-nubankpurple hover:text-white xl:hover:none"><a className="transition-all duration-300 ease-in flex justify-start items-center gap-2 ml-4"  href="#">O Nubank<IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" /></a></li>
                    <li className="h-32 flex items-center border-b-2 border-gray-300 w-full xl:border-none cursor-pointer transition-all duration-300 ease-in xl:h-14 hover:bg-nubankpurple hover:text-white xl:hover:none"><a className="transition-all duration-300 ease-in ml-4" href="#">Perguntas</a></li>
                </ul>
            </nav>
            <div className="hidden xl:group xl:flex xl:justify-center xl:items-center xl:gap-1 xl:text-nubankpurple xl:text-lg">
                <a href="#" className="font-semibold group-hover:underline">Login</a>
                <FiLogIn className="w-6 h-6 cursor-pointer" />
            </div>
            <HiMenuAlt4 onClick={()=>setShowNavbar(!showNavbar)} className="w-7 h-7 cursor-pointer  xl:hidden"/>
        </header>
    )
}