import { Navbar, Footer } from "../../@components";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="lg:pl-8 lg:pr-8">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}