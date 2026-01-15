import NavLogo from "../../assets/logo.svg";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <>
            <motion.footer
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full lg:h-38 flex items-center justify-between lg:pt-10.75 lg:pl-8 lg:pr-8 lg:pb-11 bg-none">
                <div>
                    <img src={NavLogo} alt="Image" className="w-28 h-9.75 object-center" />
                </div>

                <div>
                    <ul className="flex items-center gap-14">
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD]">
                            About
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base lg:mr-12 cursor-pointer  transition-all ease-in-out duration-300 hover:text-[#5D45FD]">
                            Works
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD] ">Services</motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:text-base lg:mr-12 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#5D45FD] ">Contact</motion.li>
                    </ul>
                </div>

                <div className="lg:w-116.5 lg:h-9 flex items-center justify-end lg:gap-2.5">

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 py-4 px-4 flex items-center justify-center bg-[#5D45FD] rounded-md cursor-pointer">
                        <i className="fa-brands fa-facebook text-white"></i>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 py-4 px-4 flex items-center justify-center bg-[#5D45FD] rounded-md cursor-pointer">
                        <i className="fa-brands fa-linkedin  text-white"></i>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 py-4 px-4 flex items-center justify-center bg-[#5D45FD] rounded-md cursor-pointer">
                        <i className="fa-brands fa-github  text-white"></i>
                    </motion.button>
                </div>
            </motion.footer>
        </>
    )
}