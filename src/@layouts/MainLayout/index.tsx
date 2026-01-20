import {
    Navbar,
    Footer,
    ScrollHash
} from "../../@components";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main className="min-h-screen w-full flex flex-col overflow-hidden">
            <Navbar />
            <div>
                <ScrollHash />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}