import AgendaComponent from "../../components/Agenda";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";

const Agenda = () => {
    const [agenda, setagenda] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/agenda`)
            .then((response) => {
                setagenda(response.data.agenda);
            })
            .catch((error) => {
                console.error("Error fetching agenda:", error);
            });
    }, []);
    return (
        <>
            <main id="main" data-aos="fade-in">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2 className="mb-3">Agenda Sekolah</h2>
                        <p className="ms-5 me-5">
                            Agenda sekolah adalah bagian yang memberikan
                            informasi singkat tentang kegiatan dan acara yang
                            akan datang di sekolah. Ini membantu siswa, guru,
                            dan orang tua untuk tetap terinformasi tentang
                            jadwal dan acara penting. Temukan jadwal lengkap dan
                            informasi tentang semua kegiatan sekolah, termasuk
                            ujian, acara spesial, pertemuan orang tua-guru,
                            liburan sekolah, dan lainnya. Tetap terkini dengan
                            kegiatan sekolah kami di sini
                        </p>
                    </div>
                </div>
                <AgendaComponent dataAgenda={agenda} agenda={null} />
            </main>
        </>
    );
};

export default Agenda;
