import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Berita from "../pages/Berita";
import ErrorPage from "../pages/Error404";
import Agenda from "../pages/Agenda";
import Kontak from "../pages/kontak";
import Guru from "../pages/Guru";
import VisiMisi from "../pages/Visimisi";
import Prestasi from "../pages/Prestasi";
import Ekstrakurikuler from "../pages/Ekstrakurikuler";
import Foto from "../pages/Galeri/Foto";
import Video from "../pages/Galeri/Video";
import BeritaDetail from "../pages/BeritaDetail";
import AgendaDetail from "../pages/AgendaDetail";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "guru",
                    element: <Guru />,
                },
                {
                    path: "visi-misi",
                    element: <VisiMisi />,
                },

                {
                    path: "prestasi",
                    element: <Prestasi />,
                },
                {
                    path: "ekstrakurikuler",
                    element: <Ekstrakurikuler />,
                },
                {
                    path: "berita-artikel",
                    element: <Berita />,
                },
                {
                    path: "berita-artikel/:beritaId",
                    element: <BeritaDetail />,
                },
                {
                    path: "agenda",
                    element: <Agenda />,
                },
                {
                    path: "agenda/:agendaId",
                    element: <AgendaDetail />,
                },
                {
                    path: "foto",
                    element: <Foto />,
                },
                {
                    path: "video",
                    element: <Video />,
                },

                {
                    path: "kontak",
                    element: <Kontak />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
