import HeroImage from "../../assets/hero-img.jpg";
import ArrowRightUp from "../../assets/right-up.png";
import ReactLogo from "../../assets/react-logo.svg";
import NodeJSLogo from "../../assets/nodejs-logo.svg";
import DockerLogo from "../../assets/docker-logo.svg";
import HTML5Logo from "../../assets/html-logo.svg";
import CSSLogo from "../../assets/css-logo.svg";
import TailwindCSSLogo from "../../assets/tailwindcss-logo.svg";
import ProjectOne from "../../assets/project-thumbnail-1.jpg";
import ProjectTwo from "../../assets/project-thumbnail-2.jpg";
import ProjectThree from "../../assets/project-thumbnail-3.jpg";
import ProjectFour from "../../assets/project-thumbnail-4.jpg";
import ServiceOne from "../../assets/service-thumbnail-1.jpg";
import ServiceTwo from "../../assets/service-thumbnail-2.jpg";
import AboutImage from "../../assets/about-img.jpg";
import CTAImage from "../../assets/CTA-bg.jpg";
import { motion } from "motion/react";

export default function Portfolio() {
    return (
        <>
            {/* Hero Section */}

            <div className="flex items-center justify-center">
                <div className="lg:h-233 lg:w-344 flex items-center" >
                    {/* Hero Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full w-1/2 flex flex-col justify-center gap-10">
                        <h3 className="lg:text-6xl">Fullstack Developer  <br />and Hardware Solutions</h3>
                        <p className="lg:text-sm lg:gap-10">I build full-stack applications with a focus on performance, scalability and clean system design.</p>

                        <div className="flex items-center justify-start">
                            <button className="lg:text-base text-left bg-[#5D45FD] text-white flex items-center gap-3 rounded-md lg:w-[185.31px] lg:h-[54.31px] lg:lg:px-4 lg:py-6.5 cursor-pointer">
                                <span>View Projects</span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                            </button>
                        </div>
                    </motion.div>
                    {/* Hero Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full w-1/2">
                        <img src={HeroImage} alt="Image" className="w-full h-full object-contain object-center rounded-md" />
                    </motion.div>
                </div>
            </div>

            {/*TechStack Section */}
            <div className="flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex lg:flex-col justify-center lg:h-64 lg:w-344">
                    <div className="flex justify-between items-center w-full lg:h-8.25 ">
                        <h3 className="text-lg">Tech stacks i use</h3>
                        <img src={ReactLogo} alt="React" className="lg:w-48.25 lg:h-6" />
                        <img src={NodeJSLogo} alt="NodeJS" className="lg:w-48.25 lg:h-6" />
                        <img src={DockerLogo} alt="Docker" className="lg:w-48.25 lg:h-6" />
                        <img src={HTML5Logo} alt="HTML5" className="lg:w-48.25 lg:h-6" />
                        <img src={CSSLogo} alt="HTML5" className="lg:w-48.25 lg:h-6" />
                        <img src={TailwindCSSLogo} alt="TAILWINDCSS" className="lg:w-48.25 lg:h-6" />
                    </div>
                </motion.div>
            </div>


            {/* Recent Works Section  */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[1745.63px] flex flex-col gap-30.5">
                <div className="lg:text-4xl flex items-center justify-center">
                    <h3 className="lg:text-4xl">Recent Works</h3>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-344 h-351 border-blue-500 grid lg:grid-cols-2 gap-y-6 gap-x-12">

                        {/* Lhanlee Beauty Lounge Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-175 flex lg:flex-col lg:gap-6 overflow-hidden">
                            <img src={ProjectOne} alt="ProjectOne" className="lg:w-169 lg:h-117" />
                            <div className="flex items-center lg:gap-2">
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">React JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Express JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Node JS</button>
                                <button className="lg:w-10 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">+3</button>
                            </div>

                            <h3 className="lg:text-[21px]">
                                Lhanlee Beauty Lounge
                            </h3>
                            <p className="lg:text-sm">
                                Created a system that improves efficiency of reservations and appointments.
                            </p>
                            <button className="lg:w-41 lg:h-14 bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 lg:text-sm rounded-md text-white flex items-center justify-between cursor-pointer">
                                <span>Live Demo</span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-7 h-7" />
                            </button>
                        </motion.div>

                        {/* IT Ticketing Portal Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-175 flex lg:flex-col lg:gap-6 ">
                            <img src={ProjectTwo} alt="ProjectOne" className="lg:w-169 lg:h-117" />
                            <div className="flex items-center lg:gap-2">
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">React JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Express JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Node JS</button>
                                <button className="lg:w-10 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">+3</button>
                            </div>

                            <h3 className="lg:text-[21px]">
                                IT Ticketing Portal
                            </h3>
                            <p className="lg:text-sm">
                                A web-based system for reporting, tracking, and resolving IT issues efficiently.
                            </p>
                            <button className="lg:w-41 lg:h-14 bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 lg:text-sm rounded-md text-white flex items-center justify-between cursor-pointer">
                                <span>Live Demo</span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                            </button>
                        </motion.div>

                        {/* E-Com Web Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-175 flex lg:flex-col lg:gap-6 ">
                            <img src={ProjectThree} alt="ProjectOne" className="lg:w-169 lg:h-117" />
                            <div className="flex items-center lg:gap-2">
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">React JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Express JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Node JS</button>
                                <button className="lg:w-10 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">+3</button>
                            </div>
                            <h3 className="lg:text-[21px]">
                                E-Com Web App
                            </h3>
                            <p className="lg:text-sm">
                                A modern e-commerce with secure payments and streamlined order management.
                            </p>
                            <button className="lg:w-41 lg:h-14 bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 lg:text-sm rounded-md text-white flex items-center justify-between cursor-pointer">
                                <span>Live Demo</span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                            </button>
                        </motion.div>

                        {/* Expert Component Solutions Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-175 flex lg:flex-col lg:gap-6 ">
                            <img src={ProjectFour} alt="ProjectOne" className="lg:w-169 lg:h-117" />
                            <div className="flex items-center lg:gap-2">
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">React JS</button>
                                <button className="lg:w-20 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Express JS</button>
                                <button className="g:w-26.7 lg:h-7 lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 bg-[#525050] lg:rounded-md lg:text-sm text-white">Tailwind CSS</button>
                            </div>
                            <h3 className="lg:text-[21px]">
                                Component Expert Solution Limited
                            </h3>
                            <p className="lg:text-sm">
                                A modern website for electronics component warehousing & testing solutions
                            </p>
                            <button className="lg:w-41 lg:h-14 bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 lg:text-sm rounded-md text-white flex items-center justify-between cursor-pointer">
                                <span>Live Demo</span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Recent Works Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="lg:h-261 lg:w-360">

                    <div className="flex flex-col gap-8 text-center lg:mt-28 lg:mb-20 ">
                        <h3 className="lg:text-4xl">Services</h3>
                        <p className="text-[13px]">End-to-end development solutions tailored to your needs.</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-6">
                            {/* Service One Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="flex items-center justify-center lg:w-169 lg:h-175 bg-[#EBEBEB]">
                                <div>
                                    <img src={ServiceOne} alt="Service" className="lg:w-153 lg:h-138" />
                                    <h3 className="lg:text-[21px] lg:mt-10">Fullstack-Development</h3>
                                </div>


                            </motion.div>

                            {/* Service Two Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="flex items-center justify-center lg:w-169 lg:h-175 bg-[#EBEBEB]">
                                <div>
                                    <img src={ServiceTwo} alt="Service" className="lg:w-153 lg:h-138" />
                                    <h3 className="lg:text-[21px] lg:mt-10">Hardware & System Integration</h3>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* About Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="lg:h-191 lg:w-360 flex items-center gap-16">
                    <div className="flex flex-col justify-center gap-8 w-full h-full">
                        <h3 className="lg:text-[37px] font-medium">
                            About
                        </h3>
                        <p className="lg:text-[17px]">I'm Renyel Jay Sioc, a full-stack developer experienced in building web applications using Node js, Express, React, Typescipt and Tailwind CSS.</p>
                        <p className="lg:text-[17px]">I've worked on e-commerce platforms, IT ticketing systems, and reservation systems that focus on performance, usability and clean architecture. I enjoy solving technical problems and creating solutions that are reliable, scalable and easy to use.</p>
                        <button className=" flex items-center justify-between lg:h-13.75 lg:w-55.75 rounded-md lg:pt-4 lg:pb-4 lg:pr-6.5 lg:pl-6.5 lg:text-xs bg-[#5D45FD]">
                            <span><p className="lg:text-sm text-white">Download Resume</p></span>
                            <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full">
                        <img src={AboutImage} alt="About" className="lg:w-164 lg:h-175 object-cover object-center rounded-lg " />
                    </div>
                </div>
            </motion.div>

            {/* Get In Touch Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="flex flex-col justify-center lg:w-360 lg:h-181 lg:pl-8 lg:pr-8 lg:pt-28 lg:pb-28 relative">
                    <img src={CTAImage} className="w-full h-full rounded-md object-cover object-center" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center lg:gap-8">
                        <h3 className="text-white lg:text-[28px] font-semibold">
                            Let's Build Something Reliable Together.
                        </h3>
                        <p className="lg:text-sm text-white">Have a project in mind or need a developer who understands both software and hardware?</p>
                        <button className="flex items-center bg-[#5D45FD] cursor-pointer rounded-md lg:pl-6.5 lg:pr-6.5 lg:pt-4 lg:pb-4">
                            <span>
                                <p className="lg:text-sm text-white">Get in Touch</p>
                            </span>
                            <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </motion.div>

        </>
    )
}