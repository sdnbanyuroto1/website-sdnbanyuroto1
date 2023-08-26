import { useEffect } from "react";
import Router from "./router/index.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <main className="container-fluid p-0">
            <Router />
        </main>
    );
}

export default App;
