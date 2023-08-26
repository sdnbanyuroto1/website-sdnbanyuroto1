import BeritaComponent from "../../components/Berita";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_HOST } from "../../utils/API/api";

const Berita = () => {
    const [berita, setberita] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/berita`)
            .then((response) => {
                setberita(response.data.berita);
            })
            .catch((error) => {
                console.error("Error fetching berita:", error);
            });
    }, []);
    return (
        <>
            <main id="main" data-aos="fade-in">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2 className="mb-3">Berita dan Artikel Sekolah</h2>
                        <p className="ms-5 me-5">
                            Berita dan artikel sekolah adalah sumber informasi
                            yang penting untuk membagikan informasi terbaru,
                            kesuksesan siswa, perkembangan pendidikan, dan
                            banyak lagi kepada komunitas sekolah dan masyarakat.
                            Ini juga merupakan cara untuk menginspirasi,
                            memberikan wawasan, dan mendukung pendidikan yang
                            berkualitas. Dengan berita dan artikel sekolah, kita
                            dapat terus mengikuti perkembangan positif dan
                            tantangan dalam dunia pendidikan.
                        </p>
                    </div>
                </div>
                <BeritaComponent dataBerita={berita} berita={null} />
            </main>
        </>
    );
};

export default Berita;
