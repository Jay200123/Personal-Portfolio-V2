import { Navbar, Footer } from "../../@components";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="lg:pt-8 lg:pb-8 md:pr-8 md:pl-8 md:py-8 md:pt-20 md:pb-20 ">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}