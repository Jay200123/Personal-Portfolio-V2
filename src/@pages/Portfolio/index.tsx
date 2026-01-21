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
import { useRef } from "react";

export default function Portfolio() {
    const projectRef = useRef<HTMLDivElement | null>(null);

    const goToProjects = () => {
        projectRef?.current?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            {/* Hero Section */}

            <div className="flex items-center justify-center">
                {/* Hero Text Section */}
                <div className="lg:h-233 lg:w-344 md:h-282.5 md:w-176 h-200 w-86 flex lg:flex-row md:flex-col flex-col lg:gap-0 md:gap-14 gap-15 items-center" >

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:h-full lg:w-1/2 md:h-56 md:w-176 w-85.75 h-75 flex flex-col justify-center gap-10">
                        <h3 className="lg:text-6xl md:text-3xl text-4xl text-left">Full-stack  <br className="lg:hidden md:hidden block" />Developer  <br className="lg:block md:block hidden" />and Hardware Solutions</h3>
                        <p className="text-sm text-left gap-10">I build full-stack applications with a focus on performance, scalability and clean system design.</p>

                        <div className="flex items-center justify-start">
                            <button onClick={goToProjects} className="lg:text-base md:text-sm text-sm text-left bg-[#5D45FD] text-white flex justify-center items-center gap-3 rounded-md lg:w-[185.31px] lg:h-[54.31px] md:w-[185.31px] md:h-13.75 w-[185.31px] h-[54.31px] lg:lg:px-4 lg:py-6.5 md:px-4 md:py-6.5 cursor-pointer">
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
                        className="lg:h-full lg:w-1/2 md:w-176 md:h-215 w-85.75 h-102.25">
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
                    className="flex lg:flex-col justify-center lg:h-64 lg:w-344 md:h-[192.96px] md:w-176 w-93.75 h-38.25">
                    <div className="flex lg:justify-between md:justify-between justify-evenly items-center w-full lg:h-8.25 ">
                        <h3 className="text-lg">Tech stacks i use</h3>
                        <img src={ReactLogo}
                            alt="React"
                            className="lg:w-48.25 lg:h-6 md:h-8.25 cursor-pointer lg:block md:block block"
                            onClick={() => window.open("http://react.dev/", "_blank", "noopener,noreferrer")} />
                        <img src={NodeJSLogo}
                            alt="NodeJS"
                            className="lg:w-48.25 lg:h-6 md:h-8.25 cursor-pointer lg:block md:block hidden"
                            onClick={() => window.open("https://nodejs.org/en", "_blank", "noopener,noreferrer")}
                        />
                        <img src={DockerLogo}
                            alt="Docker"
                            className="lg:w-48.25 lg:h-6 md:h-8.25 cursor-pointer lg:block md:block hidden"
                            onClick={() => window.open("https://www.docker.com/", "_blank", "noopener,noreferrer")}
                        />
                        <img src={HTML5Logo}
                            alt="HTML5"
                            className="lg:w-48.25 lg:h-6 md:h-8.25 cursor-pointer lg:block md:hidden hidden"
                            onClick={() => window.open("https://www.investopedia.com/terms/h/html.asp", "_blank", "noopener,noreferrer")}

                        />
                        <img src={CSSLogo}
                            alt="HTML5"
                            className="lg:w-48.25 lg:h-6 md:h-8.25 cursor-pointer lg:block md:hidden hidden"
                            onClick={() => window.open("https://www.hostinger.com/ph/tutorials/what-is-css", "_blank", "noopener,noreferrer")}
                        />
                        <img src={TailwindCSSLogo}
                            alt="TAILWINDCSS"
                            className="lg:w-48.25 md:h-8.25 lg:h-6 cursor-pointer lg:block md:hidden hidden"
                            onClick={() => window.open("https://tailwindcss.com/", "_blank", "noopener,noreferrer")}

                        />
                    </div>
                </motion.div>
            </div>


            {/* Recent Works Section  */}
            <motion.div
                id="works"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:h-[1745.63px] md:h-800 h-550 lg:pl-8 lg:pr-8 lg:pt-28 lg:pb-28 md:pl-8 md:pr-8 md:pt-20 md:pb-20 pl-4 pr-4 pt-15 pb-15 flex flex-col lg:gap-30.5 md:gap-20 gap-15"
                ref={projectRef}
            >
                <div className="lg:text-4xl flex items-center justify-center">
                    <h3 className="lg:text-4xl md:text-[28px] text-[21px]">Recent Works</h3>
                </div>

                <div className="flex items-center justify-center">
                    <div className="lg:w-344 lg:h-351 md:w-176 md:h-[2828.64px] w-86 h-500 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-y-6 lg:gap-x-12 gap-8">

                        {/* Lhanlee Beauty Lounge Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-178 md:w-176 md:h-178 w-85.75 h-59.5 flex lg:flex-col md:flex-col flex-col lg:gap-6 md:gap-6 gap-6">
                            <img src={ProjectOne} alt="ProjectOne" className="w-full h-full" />

                            <div className="flex items-center gap-2">
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">React JS</button>
                                <button className="w-24 md:w-28 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Express JS</button>
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Node JS</button>
                                <button className="w-10 md:w-20 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm  text-white">+3</button>
                            </div>

                            <h3 className="lg:text-[21px] md:text-[21px] text-base font-medium">
                                Lhanlee Beauty Lounge
                            </h3>
                            <p className="text-sm">
                                Created a system that improves efficiency of reservations and appointments.
                            </p>
                            <button
                                className="lg:w-41 lg:h-14 md:w-[161.31px] md:h-13.75 w-[161.31px] h-13.75  bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 pl-6.5 pr-6.5 pt-4 pb-4 lg:text-sm rounded-md text-white flex items-center justify-center cursor-pointer"
                                onClick={() => window.open("https://www.lhanlee-salon.com/", "_blank", "noopener,noreferrer")}
                            >
                                <span><p className="lg:text-sm md:text-xs text-xs">Live Demo</p></span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-7 h-7" />
                            </button>
                        </motion.div>

                        {/* IT Ticketing Portal Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-178 md:w-176 md:h-178 w-85.75 h-59.5 flex lg:flex-col md:flex-col flex-col lg:gap-6 md:gap-6 gap-6">
                            <img src={ProjectTwo} alt="ProjectOne" className="w-full h-full" />
                            <div className="flex items-center gap-2">
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">React JS</button>
                                <button className="w-24 md:w-28 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Express JS</button>
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Node JS</button>
                                <button className="w-10 md:w-20 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm  text-white">+3</button>
                            </div>

                            <h3 className="lg:text-[21px] md:text-[21px] text-base font-medium">
                                IT Ticketing Portal
                            </h3>
                            <p className="text-sm">
                                A web-based system for reporting, tracking, and resolving IT issues efficiently.
                            </p>
                            <button
                                className="lg:w-41 lg:h-14 md:w-[161.31px] md:h-13.75 w-[161.31px] h-13.75  bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 pl-6.5 pr-6.5 pt-4 pb-4 lg:text-sm rounded-md text-white flex items-center justify-center cursor-pointer"
                                onClick={() => window.open("https://ts-project-frontend-b8yv.vercel.app/", "_blank", "noopener,noreferrer")}

                            >
                                <span><p className="lg:text-sm md:text-xs text-xs">Live Demo</p></span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-7 h-7" />
                            </button>
                        </motion.div>

                        {/* E-Com Web Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-178 md:w-176 md:h-178 w-85.75 h-59.5 flex lg:flex-col md:flex-col flex-col lg:gap-6 md:gap-6 gap-6">
                            <img src={ProjectThree} alt="ProjectOne" className="w-full h-full" />
                            <div className="flex items-center gap-2">
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">React JS</button>
                                <button className="w-24 md:w-28 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Express JS</button>
                                <button className="w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Node JS</button>
                                <button className="w-10 md:w-20 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm  text-white">+3</button>
                            </div>
                            <h3 className="lg:text-[21px] md:text-[21px] text-base font-medium">
                                E-Com Web App
                            </h3>
                            <p className="text-sm">
                                A modern e-commerce with secure payments and streamlined order management.
                            </p>
                            <button
                                className="lg:w-41 lg:h-14 md:w-[161.31px] md:h-13.75 w-[161.31px] h-13.75  bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 pl-6.5 pr-6.5 pt-4 pb-4 lg:text-sm rounded-md text-white flex items-center justify-center cursor-pointer"
                                onClick={() => window.open(" https://e-com-redux-toolkit.vercel.app/", "_blank", "noopener,noreferrer")}

                            >
                                <span><p className="lg:text-sm md:text-xs text-xs">Live Demo</p></span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-7 h-7" />
                            </button>
                        </motion.div>

                        {/* Expert Component Solutions Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:w-169 lg:h-178 md:w-176 md:h-178 w-85.75 h-59.5 flex lg:flex-col md:flex-col flex-col lg:gap-6 md:gap-6 gap-6">
                            <img src={ProjectFour} alt="ProjectOne" className="w-full h-full" />
                            <div className="flex items-center gap-2">
                                <button className="lg:w-20 md:w-24 lg:h-9 h-10 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">React JS</button>
                                <button className="lg:w-32 md:w-24 lg:h-9 h-11 pr-3 pl-3 pt-2 pb-2 bg-[#525050] rounded-md text-sm text-white">Tailwind CSS</button>
                            </div>
                            <h3 className="lg:text-[21px] md:text-[21px] text-base font-medium">
                                Component Expert Solution Limited
                            </h3>
                            <p className="text-sm">
                                A modern website for electronics component warehousing & testing solutions
                            </p>
                            <button
                                className="lg:w-41 lg:h-14 md:w-[161.31px] md:h-13.75 w-[161.31px] h-13.75  bg-[#5D45FD] lg:pt-4 lg:pb-4 lg:pl-7 lg:pr-7 pl-6.5 pr-6.5 pt-4 pb-4 lg:text-sm rounded-md text-white flex items-center justify-center cursor-pointer"
                                onClick={() => window.open("https://component-expert-solutions-limited-web.vercel.app/", "_blank", "noopener,noreferrer")}

                            >
                                <span><p className="lg:text-sm md:text-xs text-xs">Live Demo</p></span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-7 h-7" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
                id="services"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="lg:h-266 lg:w-360 md:w-3xl md:h-437 w-86.25 h-270 sm:pt-20 sm:pb-20 sm:pl-4 sm:pr-4">

                    <div className="flex flex-col gap-8 text-center lg:mt-28 md:mt-20 lg:mb-20 mt-20 mb-20">
                        <h3 className="md:text-4xl lg:text-4xl text-[21px]">Services</h3>
                        <p className="text-[13px]">End-to-end development <br className="lg:hidden md:hidden block" />solutions tailored to your needs.</p>
                    </div>

                    <div className="flex items-center justify-center md:mt-20">
                        <div className="lg:w-344 lg:h-175 md:w-176 md:h-356.25 w-85.75 h-190.75 flex lg:flex-row md:flex-col flex-col items-center gap-6">
                            {/* Service One Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="flex items-center justify-center lg:w-169 lg:h-175 md:w-176 md:h-175.25 w-85.75 h-92.5 bg-[#EBEBEB]">
                                <div className="lg:w-153 lg:h-138 md:w-160 md:h-144 w-73.75 h-66.5">
                                    <img src={ServiceOne} alt="Service" className="w-full h-full " />
                                    <h3 className="lg:text-[21px] md:text-[21px] text-base lg:mt-10 md:mt-5">Fullstack-Development</h3>
                                </div>
                            </motion.div>

                            {/* Service Two Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="flex items-center justify-center lg:w-169 lg:h-175 md:w-176 md:h-175.25 w-85.75 h-92.5 bg-[#EBEBEB]">
                                <div className="lg:w-153 lg:h-138 md:w-160 md:h-144 w-73.75 h-66.5">
                                    <img src={ServiceTwo} alt="Service" className="w-full h-full object-cover object-center" />
                                    <h3 className="lg:text-[21px] md:text-[21px] text-base lg:mt-10 md:mt-5">Hardware & System Integration</h3>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* About Section */}
            <motion.div
                id="about"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="lg:h-191 lg:w-360 md:w-3xl md:h-290 w-89.25 h-195 flex lg:flex-row md:flex-col flex-col items-center gap-16 pt-8  md:pb-8  md:pr-8  md:pl-8">
                    <div className="flex flex-col justify-center gap-8 w-full h-full">
                        <h3 className="lg:text-[37px] md:text-[37px] text-[21px] font-medium">
                            About
                        </h3>
                        <p className="lg:text-[17px] md:text-[17px] text-base">I'm Renyel Jay Sioc, a full-stack developer experienced in building web applications using Node js, Express, React, Typescipt and Tailwind CSS.</p>
                        <p className="lg:text-[17px] md:text-[17px] text-base">I've worked on e-commerce platforms, IT ticketing systems, and reservation systems that focus on performance, usability and clean architecture. I enjoy solving technical problems and creating solutions that are reliable, scalable and easy to use.</p>
                        <button className=" flex items-center justify-center lg:h-13.75 lg:w-55.75 md:h-13 md:w-55.75 w-[222.31px] h-[54.31px] rounded-md pt-4 pb-4 pr-6.5 pl-6.5 text-xs bg-[#5D45FD]">
                            <span>
                                <a
                                    href="/public/SIOC_RESUME_RENYEL_JAY.pdf"
                                    download
                                    className="lg:text-sm text-white">Download Resume
                                </a>
                            </span>
                            <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="flex flex-col justify-center lg:w-164 lg:h-175 md:w-176 md:h-175 w-89.25 h-78.75 ">
                        <img src={AboutImage} alt="About" className="w-full h-full object-cover object-center rounded-lg" />
                    </div>
                </div>
            </motion.div>

            {/* Get In Touch Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center justify-center">
                <div className="flex lg:flex-col md:flex-row justify-center lg:w-360 lg:h-181 md:w-3xl md:h-120 w-93.75 h-[375.31px] md:pl-8 md:pr-8 pt-28 pb-28 ">
                    <div className="relative lg:w-344 lg:h-125 md:w-176 md:h-80 w-85.75 h-64">
                        <img src={CTAImage} className="w-full h-full rounded-md object-cover object-center" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                            <h3 className="text-white lg:text-[32px] md:text-[32px] text-base text-center font-semibold">
                                Let's Build Something <br className="lg:hidden md:block" /> Reliable Together.
                            </h3>
                            <p className="text-sm text-white text-center">Have a project in mind or need a developer who understands both <br className="lg:hidden md:block hidden" /> software and hardware?</p>
                            <button className="flex items-center bg-[#5D45FD] cursor-pointer rounded-md pl-6.5 pr-6.5 pt-4 pb-4">
                                <span>
                                    <p className="text-sm text-white">Get in Touch</p>
                                </span>
                                <img src={ArrowRightUp} alt="Arrow Up" className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}