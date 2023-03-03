import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
    return (
        <div className="root_layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
