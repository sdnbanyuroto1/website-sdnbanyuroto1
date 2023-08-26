import PropTypes from "prop-types";
import { useState } from "react";

const CardEkskul = ({ foto, title, deskripsiLengkap }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-5">
            <div className="card card-eks rounded-3 shadow-sm border-0">
                <a className="img-card">
                    <img
                        src={foto}
                        className="card-img-top"
                        alt="Gambar Ekstrakurikuler"
                    />
                </a>

                <div className="card-body">
                    <h5 className="card-title fw-bold text-uppercase">
                        {title}
                    </h5>
                    <p className="card-text">
                        {isReadMore
                            ? deskripsiLengkap.slice(0, 150)
                            : deskripsiLengkap}
                        <span
                            onClick={toggleReadMore}
                            className="read-or-hide ms-2">
                            {isReadMore ? "...read more" : " show less"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

CardEkskul.propTypes = {
    foto: PropTypes.any,
    title: PropTypes.string,
    deskripsiLengkap: PropTypes.string,
};
export default CardEkskul;
