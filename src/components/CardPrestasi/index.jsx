import PropTypes from "prop-types";
import { useState } from "react";
import { HOST } from "../../utils/API/api";

const CardPrestasi = ({ foto, title, deskripsi }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch ">
            <div className="card card-prestasi rounded-5 shadow w-100">
                <a className="img-card">
                    <img src={`${HOST.url}/${foto}`} />
                </a>
                <div className="card-content">
                    <h4 className="card-title">
                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                            {title}
                        </a>
                    </h4>

                    <p className="card-text">
                        {isReadMore ? deskripsi.slice(0, 150) : deskripsi}
                        {/* {deskripsi} */}
                    </p>
                </div>
                <div className="card-read-more text-center">
                    <span
                        onClick={toggleReadMore}
                        className="btn fs-5 fw-bold mt-1 mb-1">
                        {isReadMore ? "Selengkapnya" : "Sembunyikan"}
                    </span>
                </div>
            </div>
        </div>
    );
};

CardPrestasi.propTypes = {
    foto: PropTypes.any,
    title: PropTypes.string,
    deskripsi: PropTypes.string,
};
export default CardPrestasi;
