import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { HOST } from "../../utils/API/api";

const CardAgenda = ({ id, foto, judul, deskripsi, jadwal }) => {
    const location = useLocation();
    const isNavActive = location.pathname === `/agenda`;

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="berita-item mt-4 w-100">
                <NavLink
                    className="img-card"
                    to={
                        isNavActive
                            ? `${location.pathname}/${id}`
                            : `agenda/${id}`
                    }
                    end>
                    <img
                        src={`${HOST.url}/${foto}`}
                        className="img-fluid"
                        alt="Gambar Agenda Sekolah"
                    />
                </NavLink>
                <div className="berita-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Agenda</h4>
                    </div>
                    <h3>
                        <NavLink
                            className="text-title-berita"
                            to={isNavActive ? id : `agenda/${id}`}>
                            {judul}
                        </NavLink>
                    </h3>
                    <h6>
                        <i>{jadwal}</i>
                    </h6>
                    <p className="card-text-berita">{deskripsi}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <span>Admin SDN BANYUROTO 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardAgenda.propTypes = {
    foto: PropTypes.any,
    id: PropTypes.any,
    jenis: PropTypes.string,
    judul: PropTypes.string,
    deskripsi: PropTypes.string,
    jadwal: PropTypes.string,
};

export default CardAgenda;
