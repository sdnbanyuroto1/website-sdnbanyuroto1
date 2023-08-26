import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { HOST } from "../../utils/API/api";

const CardBerita = ({ id, foto, jenis, title, deskripsi }) => {
    const location = useLocation();
    const isNavActive = location.pathname === `/berita-artikel`;
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="berita-item mt-4 w-100">
                <NavLink
                    className="img-card"
                    to={
                        isNavActive
                            ? `${location.pathname}/${id}`
                            : `berita-artikel/${id}`
                    }
                    end>
                    <img
                        src={`${HOST.url}/${foto}`}
                        className="img-fluid"
                        alt="Gambar Berita dan Artikel Sekolah"
                    />
                </NavLink>
                <div className="berita-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{jenis}</h4>
                    </div>
                    <h3>
                        <NavLink
                            className="text-title-berita"
                            to={isNavActive ? id : `berita-artikel/${id}`}>
                            {title}
                        </NavLink>
                    </h3>
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

CardBerita.propTypes = {
    foto: PropTypes.any,
    id: PropTypes.any,
    jenis: PropTypes.string,
    title: PropTypes.string,
    deskripsi: PropTypes.string,
};

export default CardBerita;
