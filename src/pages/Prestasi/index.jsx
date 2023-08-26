import PrestasiComponent from "../../components/Prestasi";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";

const Prestasi = () => {
    const [prestasi, setPrestasi] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/prestasi`)
            .then((response) => {
                setPrestasi(response.data.prestasi);
            })
            .catch((error) => {
                console.error("Error fetching prestasi:", error);
            });
    }, []);
    return (
        <main id="main" data-aos="fade-in">
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2 className="mb-3">Prestasi Sekolah</h2>
                    <p className="ms-5 me-5">
                        Prestasi sekolah adalah bukti dari kesuksesan siswa,
                        guru, dan staf sekolah dalam mencapai tujuan pendidikan
                        dan pengembangan diri. Ini mencakup prestasi akademik,
                        keterlibatan dalam kegiatan ekstrakurikuler, serta
                        kontribusi positif terhadap masyarakat sekolah dan
                        lingkungan sekitar. Prestasi sekolah mencerminkan
                        komitmen terhadap pendidikan berkualitas dan pembangunan
                        karakter yang kuat di tengah-tengah komunitas
                        pendidikan.
                    </p>
                </div>
            </div>
            <PrestasiComponent dataPrestasi={prestasi} prestasi={null} />
        </main>
    );
};

export default Prestasi;
