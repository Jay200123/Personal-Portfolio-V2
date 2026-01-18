import ArrowUpRight from "../../assets/right-up.png";
import NavLogo from "../../assets/logo.svg";
import { motion } from "motion/react";

export default function Navbar() {
    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:h-38 md:h-35 h-33 flex items-center justify-between lg:pt-10.75 lg:pl-8 lg:pr-8 lg:pb-11 md:pt-20 md:pb-20 md:pl-8 md:pr-8 pl-4 pr-4 pt-15 bg-none">
                <div>
                    <img src={NavLogo} alt="Image" className="w-28 h-9.75 object-center" />
                </div>

                <div className="lg:block md:hidden hidden">
                    <ul className="flex items-center gap-14">
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base md:text-sm lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD]">
                            About
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base md:text-sm lg:mr-12 cursor-pointer  transition-all ease-in-out duration-300 hover:text-[#5D45FD]">
                            Works
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base md:text-sm lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD] ">Services</motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base md:text-sm lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD] ">Contact</motion.li>
                    </ul>
                </div>

                <div className="lg:block md:hidden hidden">
                    <button className="border border-black rounded-md lg:text-base lg:py-2.5 lg:px-2.5 cursor-pointer hover:text-violet-500 flex items-center gap-2">
                        <span>Get in Touch</span>
                        <img src={ArrowUpRight} alt="Arrow Up" className="w-6 h-6" />
                    </button>
                </div>

                <div className="lg:hidden md:block block">
                    <button className="rounded-md lg:text-base lg:py-2.5 lg:px-2.5 cursor-pointer">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </motion.nav>
        </>
    )
}