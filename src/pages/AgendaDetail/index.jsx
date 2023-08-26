import { useParams } from "react-router-dom";
import DetailAgenda from "../../components/DetailAgenda";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST } from "../../utils/API/api";
import format from "date-fns/format/index.js";
import idLocale from "date-fns/locale/id/index.js";

const AgendaDetail = () => {
    const id = useParams().agendaId;
    const [agenda, setagenda] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_HOST.url}/agenda/${id}`)
            .then((response) => {
                response.data.agenda.jadwal = format(
                    new Date(response.data.agenda.jadwal),
                    "dd MMMM yyyy, HH:mm",
                    {
                        locale: idLocale,
                    }
                );
                response.data.agenda.tanggal_publikasi = format(
                    new Date(response.data.agenda.tanggal_publikasi),
                    "dd MMMM yyyy, HH:mm",
                    {
                        locale: idLocale,
                    }
                );

                setagenda(response.data.agenda);
            })
            .catch((error) => {
                console.error("Error fetching agenda:", error);
            });
    }, []);
    return (
        <main id="main">
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Agenda Detail Sekolah</h2>
                    <p>
                        Agenda sekolah adalah bagian yang memberikan informasi
                        singkat tentang kegiatan dan acara yang akan datang di
                        sekolah. Ini membantu siswa, guru, dan orang tua untuk
                        tetap terinformasi tentang jadwal dan acara penting.
                        Temukan jadwal lengkap dan informasi tentang semua
                        kegiatan sekolah, termasuk ujian, acara spesial,
                        pertemuan orang tua-guru, liburan sekolah, dan lainnya.
                        Tetap terkini dengan kegiatan sekolah kami di sini
                    </p>
                </div>
            </div>

            <DetailAgenda
                foto={agenda.imageUrl}
                judul={agenda.judul}
                deskripsi={agenda.deskripsi}
                tglposting={agenda.tanggal_publikasi}
                jadwal={agenda.jadwal}
            />
        </main>
    );
};

export default AgendaDetail;
