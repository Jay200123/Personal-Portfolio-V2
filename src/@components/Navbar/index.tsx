import ArrowUpRight from "../../assets/right-up.png";
import NavLogo from "../../assets/logo.svg";

export default function Navbar() {
    return (
        <>
            <nav className="w-full lg:h-38 flex items-center justify-between lg:pt-10.75 lg:pl-8 lg:pr-8 lg:pb-11 bg-none">
                <div>
                    <img src={NavLogo} alt="Image" className="w-28 h-9.75 object-center"/>
                </div>

                <div>
                    <ul className="flex items-center gap-14">
                        <li className="lg:text-base lg:mr-12 cursor-pointer hover:text-[#5D45FD]">About</li>
                        <li className="lg:text-base lg:mr-12 cursor-pointer hover:text-[#5D45FD]">Works</li>
                        <li className="lg:text-base lg:mr-12 cursor-pointer hover:text-[#5D45FD]">Services</li>
                        <li className="lg:text-base lg:mr-12 cursor-pointer hover:text-[#5D45FD]">Contact</li>
                    </ul>
                </div>

                <div>
                    <button className="border border-black rounded-md lg:text-base lg:py-2.5 lg:px-2.5 cursor-pointer hover:text-violet-500 flex items-center gap-2">
                        <span>Get in Touch</span>
                        <img src={ArrowUpRight} alt="Arrow Up" className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </>
    )
}