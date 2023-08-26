import { guru_karyawan } from "../../assets/img";
const VisiMisiComponent = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row d-flex align-items-center">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-left"
                        data-aos-delay="100">
                        <img src={guru_karyawan} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3 className="fw-bold">Visi Sekolah</h3>
                        <p className="fst-italic">
                            “BERIMAN DAN BERTAQWA, AKTIF, KREATIF,
                            BERINTEGRITAS, BERWAWASAN LUAS, PEDULI TERHADAP
                            LINGKUNGAN DAN UNGGUL DALAM PRESTASI AKADEMIK DAN
                            NON AKADEMIK”.
                        </p>
                        <h3 className="fw-bold">Misi Sekolah</h3>
                        <ul>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Melaksanakan Shalat dhuha dan Shalat Dzuhur
                                berjamaah
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Pembiasaan dzikir pagi, hafalan surat pendek,
                                dan hafalan doa sehari-hari.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Progam infaq senin-jumat.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Menyanyikan lagu Indonesia Raya dan Lagu
                                Nasional setiap hari.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Program sekolah bebas sampah.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Perilaku Hidup Bersih dan Sehat.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Mengaktifkan ekstrakurikuler (Pramuka, kesenian,
                                olahraga, TIK, Tilawah)
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Guru “melek IT” menggunakan ChromeBook.
                            </li>
                            <li>
                                <i
                                    id="check-circle"
                                    className="bi bi-check-circle"></i>
                                Menjalin komunikasi yang baik dengan orangtua
                                melalui progam parenting.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisiMisiComponent;
