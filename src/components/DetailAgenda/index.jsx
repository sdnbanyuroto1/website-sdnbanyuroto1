import PropTypes from "prop-types";
import { HOST } from "../../utils/API/api";

const DetailAgenda = ({ foto, judul, deskripsi, jadwal, tglposting }) => {
    return (
        <section id="course-details" className="course-details">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-8">
                        <img
                            width="100%"
                            src={`${HOST.url}/${foto}`}
                            className="img-fluid"
                            alt="Gambar Agenda Detail"
                        />
                        <h3 className="mt-3">{judul}</h3>
                        <hr />
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
                            <h5>Jenis</h5>
                            <p>Agenda Sekolah</p>
                        </div>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Tanggal Posting</h5>
                            <p>{tglposting}</p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Jadwal</h5>
                            <p>{jadwal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
DetailAgenda.propTypes = {
    foto: PropTypes.any,
    judul: PropTypes.string,
    jadwal: PropTypes.string,
    deskripsi: PropTypes.string,
    tglposting: PropTypes.string,
};

export default DetailAgenda;
