import PropTypes from "prop-types";
import { HOST } from "../../utils/API/api";

const DetailBerita = ({ foto, judul, jenis, deskripsi, tglposting }) => {
    return (
        <section id="course-details" className="course-details">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-8">
                        <img
                            width="100%"
                            src={`${HOST.url}/${foto}`}
                            className="img-fluid"
                            alt="Gambar Berita Detail"
                        />
                        <h3>{judul}</h3>
                        <p>{deskripsi}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Dibuat oleh</h5>
                            <p>
                                <a href="">Admin SDN BANYUROTO 1</a>
                            </p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Tanggal posting</h5>
                            <p>{tglposting}</p>
                        </div>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Jenis (Berita/Artikel)</h5>
                            <p>{jenis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
DetailBerita.propTypes = {
    foto: PropTypes.any,
    judul: PropTypes.string,
    jenis: PropTypes.string,
    deskripsi: PropTypes.string,
    tglposting: PropTypes.string,
};

export default DetailBerita;
