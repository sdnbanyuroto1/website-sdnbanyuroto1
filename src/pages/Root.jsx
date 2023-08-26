import Footer from "../components/Footer";
import Kontak from "../components/Kontak";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
                {navigation.state === "loading" && <p>Loading...</p>}
            </main>
            <Kontak />
            <Footer />
        </div>
    );
};

export default Root;
