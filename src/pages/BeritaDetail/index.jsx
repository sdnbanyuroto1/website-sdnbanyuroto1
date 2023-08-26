import { useParams } from "react-router-dom";
import DetailBerita from "../../components/DetailBerita";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";
import format from "date-fns/format/index.js";
import idLocale from "date-fns/locale/id/index.js";

const BeritaDetail = () => {
    const id = useParams().beritaId;
    const [berita, setberita] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/berita/${id}`)
            .then((response) => {
                response.data.berita.tanggal_publikasi = format(
                    new Date(response.data.berita.tanggal_publikasi),
                    "dd MMMM yyyy, HH:mm",
                    {
                        locale: idLocale,
                    }
                );
                setberita(response.data.berita);
            })
            .catch((error) => {
                console.error("Error fetching berita:", error);
            });
    }, []);

    return (
        <>
            <main id="main">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Berita & Artikel Detail</h2>
                        <p>
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

                <DetailBerita
                    foto={berita.imageUrl}
                    judul={berita.judul}
                    deskripsi={berita.deskripsi}
                    tglposting={berita.tanggal_publikasi}
                    jadwal={berita.jadwal}
                    jenis={berita.jenis}
                />
            </main>
        </>
    );
};

export default BeritaDetail;
