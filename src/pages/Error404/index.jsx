import { NavLink, useRouteError } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ErrorPage = () => {
    const error = useRouteError();
    let message;
    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        message = error.data;
    }
    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center flex-column align-items-center vh-100">
                <h5>{message}</h5>
                <h1 className="text-danger mt-4 mb-4">
                    {error.status} Not Found
                </h1>
                <h5>Something went wrong</h5>
                <NavLink className="btn btn-primary" to="/" end>
                    Kembali Ke Halaman Home
                </NavLink>
            </div>
        </>
    );
};

export default ErrorPage;
