import CardFoto from "../../components/CardFoto";
import HeaderSection from "../../components/HeaderSection";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";

const Foto = () => {
    const [foto, setfoto] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/foto`)
            .then((response) => {
                setfoto(response.data.foto);
            })
            .catch((error) => {
                console.error("Error fetching foto:", error);
            });
    }, []);
    return (
        <section id="foto-sekolah" className="foto-sekolah p-0">
            <div className="breadcrumbs mb-4" data-aos="fade-in">
                <div className="container">
                    <h2 className="mb-3">Foto Sekolah</h2>
                    <p className="ms-5 me-5">
                        Galeri Foto Sekolah adalah sarana yang menampilkan
                        beragam foto yang menggambarkan aktivitas, kejadian, dan
                        prestasi yang terjadi di sekolah. Dari foto-foto ini,
                        pengunjung dapat melihat momen-momen berharga dalam
                        kehidupan sekolah, termasuk acara olahraga, seni,
                        kegiatan sosial, pembelajaran, dan perayaan lainnya.
                        Galeri foto ini memberikan wawasan visual tentang
                        atmosfer dan budaya sekolah, sambil memberikan informasi
                        tambahan kepada calon siswa dan orang tua tentang apa
                        yang dapat mereka harapkan dari sekolah
                    </p>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title1="Galeri Foto Sekolah"
                    total={null}
                    lihatsemua="Lihat semua berita & artikel"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {foto.map((item) => {
                        return (
                            <CardFoto
                                key={item._id}
                                title={item.judul}
                                deskripsi={item.deskripsi}
                                foto={item.imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Foto;
